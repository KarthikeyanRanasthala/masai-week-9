import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducer from './redux/carStore';

import App from './App'

const carStore = createStore(reducer);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={carStore}>
            <App />
        </Provider>
    </BrowserRouter>
    , document.getElementById('root'));

