import ReactDOM from 'react-dom';
import React from 'react';
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { issueListReducer } from '@/reducers/issueListReducer';

import { loggerMiddleware, filterQueryMiddleware } from '@/lib/middleware';

const rootElement = document.getElementById('root');

const rootReducer = combineReducers({
  issueListReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(loggerMiddleware, filterQueryMiddleware)));

import(/*webpackChunkName: 'App' */ '@/App').then(({ default: App }) =>
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
);
