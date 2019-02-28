import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Current from './components/Current';
import Past from './components/Past';
import Future from './components/Future';
import Layout from './components/Layout';
class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Layout>
                        <Route exact path="/" component={Current} />
                        <Route exact path="/current" component={Current} />
                        <Route exact path="/future" component={Future} />
                        <Route exact path="/past" component={Past} />
                    </Layout>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
