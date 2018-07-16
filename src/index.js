import React from 'react'; // import node module for React
import {render} from 'react-dom'; //

// need to import components into index.js file before rendering
// using relative file path
import Router from './components/Router';

// link CSS for the entire app
import './css/style.css'; 

// render takes JSX and DOM element to mount to page
// React components need to be self-closing
render(<Router />, document.querySelector('#main'));
