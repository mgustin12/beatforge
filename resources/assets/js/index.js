import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

import App from './components/App.jsx'
import reducers from './reducers'
import middleware from './middleware'

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middleware);

const client = new ApolloClient({
    networkInterface: createNetworkInterface({ uri: 'http://localhost:8000/graphql'})
});

ReactDOM.render(
    React.createElement(App, {
        store: createStore(reducers, initialState, enhancer),
        client
    }),
    document.getElementById('app')
);