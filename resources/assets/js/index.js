import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose, combineReducers } from 'redux'
import { ApolloClient, createNetworkInterface } from 'react-apollo'

import App from './core/components/App.jsx'
import middleware from './middleware'

import profile from './profile/reducer.js'
import beatpad from './beatpad/reducer.js'
import home from './home/reducer.js'
import core from './core/reducer.js'

const reducers = combineReducers({
    profile,
    beatpad,
    home,
    core
});

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