import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Parse from "parse"

//Parse.initialize(process.env.REACT_APP_APP_KEY, process.env.REACT_APP_JS_KEY);
Parse.initialize("aKa4elDQmoDX7QTNARrGF3MR3JmM5h7uo5jy5uK6", "ZF9JDY4h3W9r2YIgeVh2Pjhp1EAuzXJWPG8I98fv")
Parse.serverURL = 'https://parseapi.back4app.com/';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
