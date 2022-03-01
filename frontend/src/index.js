import React from 'react';
import ReactDOM from 'react-dom';
import "./global.scss"
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap/dist/js/bootstrap.min.js"
import { Provider } from "react-redux"
import store from "./store"
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
