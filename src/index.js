//package for standard react, view library
import React from 'react';
//package for connector, can change for mobile ex
import ReactDOM from 'react-dom';
import './index.css'; // ./ means in same directory
//import App from './App';
import App from './containers/App';
import reportWebVitals from './reportWebVitals';
import 'tachyons';

ReactDOM.render(
   <App/>,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
