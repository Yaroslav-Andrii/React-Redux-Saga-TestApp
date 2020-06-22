import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './redux/rootReducer';
import { spamWordsMiddleware } from './redux/middleware';
import { sagaWatcher } from './redux/sagas';

const saga = createSagaMiddleware();

const store = createStore( 
  rootReducer, 
  composeWithDevTools(
    applyMiddleware(
      thunk, 
      spamWordsMiddleware, 
      saga
    )
  )
)

saga.run(sagaWatcher);

render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
