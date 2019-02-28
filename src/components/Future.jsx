import React, { Component } from 'react';
import axios from 'axios';
import DataAdapter from '../adapter/DataAdapter';
import BoxTable from './BoxTable';
import nprogress from 'nprogress';
import './custom-nprogress.css';

class Home extends Component {
    constructor() {
        super();
        this.state = {
            title: 'Future'
        };
    }
    componentWillMount() {
        nprogress.start();
    }
    componentDidMount() {
        // axios
        //     .get(
        //         'https://raw.githubusercontent.com/nodejs/Release/master/schedule.json'
        //     )
        //     .then(response => console.log(response.data));
        //.then(data => this.setState({ data:data }));
        const da = new DataAdapter(DataAdapter.data);
        da.transform();
        this.setState({
            future: da.getFutureList(),
            past: da.getPastList(),
            current: da.getCurrentList()
        });
        console.log('this.state', this.state);
        nprogress.done();
    }
    render() {
        const rows = this.state ? this.state.future || [] : [];
        console.log(this.state);
        return (
            <div className="">
                <div className="is-size-2">{this.state.title}</div>
                <BoxTable data={rows} />
            </div>
        );
    }
}

export default Home;
