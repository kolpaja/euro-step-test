import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./utils/store";

import App from './App';
import './style/index.scss'

import "./utils/i18n";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'flag-icon-css/css/flag-icons.min.css';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

