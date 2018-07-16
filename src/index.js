import React from 'react'; // import node module for React
import {render} from 'react-dom'; //

// need to import components into index.js file before rendering
// using relative file path
import StorePicker from './components/StorePicker';
import App from './components/App';

import './css/style.css'; // link CSS for the entire app

// render takes JSX and DOM element to mount to page
// React components need to be self-closing
render(<App />, document.querySelector('#main'));
