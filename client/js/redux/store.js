import { createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import reducer from './reducer.js';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './saga/index.saga.js';
import * as states from './state/index.state.js';

let devtool = undefined;
if (process.env.NODE_ENV !== 'test') {
  devtool = window.devToolsExtension ? window.devToolsExtension() : undefined;
}

const sagaMiddleware = createSagaMiddleware();

const middleware =
  process.env.NODE_ENV === 'test' || !devtool ?
    applyMiddleware(
      routerMiddleware(browserHistory),
      sagaMiddleware,
    )
    : compose(
    applyMiddleware(
      routerMiddleware(browserHistory),
      sagaMiddleware,
    ),
    devtool
  );


const combinedReducer = (state, action) =>
  ({
    ...reducer(state, action),
    routing: routerReducer(state.routing, action),
  });

const store = createStore(
  combinedReducer,
  {
    ...(process.env.NODE_ENV === 'test' ? states.test : states.initial),
    routing: {
      locationBeforeTransitions: null,
    },
  },
  middleware
);

const saga = sagaMiddleware.run(rootSaga);
saga.done.catch((error) => {
  throw error;
});

if (module.hot) {
  module.hot.accept('./reducer.js', () => {
    const nextReducer = require('./reducer.js').default; // eslint-disable-line
    store.replaceReducer((state, action) =>
      ({
        ...nextReducer(state, action),
        routing: routerReducer(state.routing, action),
      }));
  });
}

export default store;
