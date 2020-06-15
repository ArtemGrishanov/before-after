import React from 'react';
import ReactDOM from 'react-dom';

import App from './App'
import './components/testix_main.scss'

window.start = function() {
    ReactDOM.render(
        <App/>
    , document.getElementById('root'));
}

window.start()