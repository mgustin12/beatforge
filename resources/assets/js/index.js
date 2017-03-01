import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, compose } from 'redux'

import App from './components/App.jsx'
import reducers from './reducers'
import middleware from './middleware'

const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancer = composeEnhancers(middleware);

ReactDOM.render(
    React.createElement(App, {
        store: createStore(reducers, initialState, enhancer)
    }),
    document.getElementById('app')
);