import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';

import MainLayout from './MainLayout.jsx';



class App extends Component {
    render(){
        return(
            <Provider store={this.props.store}>
                <Router history={browserHistory}>
                    <Route path="/" component={MainLayout}>

                    </Route>
                </Router>
            </Provider>
        );
    }
}

export default App;
