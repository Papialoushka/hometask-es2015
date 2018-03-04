import React from 'react';
import { render,  ReactDOM } from 'react-dom';
import './index.css';
import App from './containers/App';
import {Link, BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { createStore } from 'redux';
import tweetReducer from './reducers/tweetReducer';
import Root from './components/root/Root';
import configureStore from './store/configureStore';
​
const store = configureStore();
​
render(
  <Root store={store} />,
  document.getElementById('root')
);
