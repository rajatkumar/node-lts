import React, { Component } from 'react';
import BoxTable from './BoxTable';

class Home extends Component {
    constructor(props) {
        super(props);
        this.title = 'Future';
    }

    render() {
        const rows = this.props.data ? this.props.data.future : [];
        return (
            <div>
                <div className="is-size-2">{this.title}</div>
                <BoxTable data={rows} />
            </div>
        );
    }
}

export default Home;
