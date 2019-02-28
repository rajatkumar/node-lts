import React, { Component } from 'react';
import nprogress from 'nprogress';
import './custom-nprogress.css';

function withDataSource(WrappedComponent, dataAdapter) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null
            };
        }
        componentWillMount() {
            nprogress.start();
        }
        componentDidMount() {
            dataAdapter.getData((err, data) => {
                this.setState({
                    data: {
                        future: dataAdapter.getFutureList(),
                        past: dataAdapter.getPastList(),
                        current: dataAdapter.getCurrentList()
                    }
                });
                nprogress.done();
            });
        }

        render() {
            return (
                <WrappedComponent
                    dataApapter={dataAdapter}
                    data={this.state.data}
                />
            );
        }
    };
}

export default withDataSource;
