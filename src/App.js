import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Current from './components/Current';
import Past from './components/Past';
import Future from './components/Future';
import Layout from './components/Layout';
import DataAdapter from './adapter/DataAdapter';
import withDataSource from './components/withDataSource';
class App extends Component {
    constructor(props) {
        super(props);
        this.dataAdapter = new DataAdapter();
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Layout>
                        <Route
                            exact
                            path="/"
                            component={withDataSource(
                                Current,
                                this.dataAdapter
                            )}
                        />
                        <Route
                            exact
                            path="/current"
                            component={withDataSource(
                                Current,
                                this.dataAdapter
                            )}
                        />
                        <Route
                            exact
                            path="/future"
                            component={withDataSource(Future, this.dataAdapter)}
                        />
                        <Route
                            exact
                            path="/past"
                            component={withDataSource(Past, this.dataAdapter)}
                        />
                    </Layout>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
