import { createStore, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';

import bookReducer from './reducer';
import rootSaga from './saga/index.saga';
import states from './state/index.state';
import { createBookSuccess } from './modules/examples.module';

let devtool;
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
    devtool,
  );


const combinedReducer = (state, action) =>
  ({
    routing: routerReducer(state.routing, action),
    books: bookReducer(state.books, action),
    form: formReducer.plugin({
      book: (state, action) => {
        switch (action.type) {
          case createBookSuccess.getType():
            return undefined;
          default:
            return state;
        }
      },
    })(state.form, action),
  });

const store = createStore(
  combinedReducer,
  {
    books: states,
    routing: {
      locationBeforeTransitions: null,
    },
  },
  middleware,
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
