import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { ApolloProvider } from 'react-apollo';

import MainLayout from './MainLayout.jsx';
import HomePage from '../../home/components/HomePage.jsx';
import BeatpadPage from '../../beatpad/components/BeatpadPage.jsx';
import ProfilePage from '../../profile/containers/ProfilePage.js';

class App extends Component {
    render(){
        return(
            <ApolloProvider store={this.props.store} client={this.props.client}>
                <Router history={browserHistory}>
                    <Route path="/" component={MainLayout}>
                        <Route path="/home" component={HomePage} />
                        <Route path="/beatpad" component={BeatpadPage} />
                        <Route path="/profile" component={ProfilePage} />
                    </Route>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;
