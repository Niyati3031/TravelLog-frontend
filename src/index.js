import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
axios.defaults.baseURL = "http://localhost:5050"//"https://travel-mania-api.onrender.com";

TimeAgo.addDefaultLocale(en);
// TimeAgo.addLocale(en);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


