import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import hoverReducer from './features/hover';
import scoreReducer from './features/score';

const store = configureStore({
  reducer: {
    hover: hoverReducer,
    score: scoreReducer
  }
});

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
document.getElementById('root'));
