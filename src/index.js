import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import './config/ReactotronConfig'

import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import history from './services/history'

import Route from './routes/index'

import "assets/css/material-dashboard-react.css?v=1.8.0";

import { store, persistor } from './store' 

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router history={history}>        
        <Route />
        <ToastContainer autoClose={3000} />
      </Router>
      </PersistGate>
  </Provider>,
  document.getElementById("root")
);
