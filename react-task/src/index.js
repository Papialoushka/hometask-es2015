import React from 'react';
import {render, ReactDOM} from 'react-dom';
import './index.css';
import {createStore} from 'redux';
import tweetReducer from './reducers/tweetReducer';
import Root from './components/root/Root';

let store = createStore(tweetReducer);

render(
  <Root store={store}/>,
  document.getElementById('root')
);