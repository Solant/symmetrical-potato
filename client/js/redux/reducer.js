import { createReducer } from 'redux-act';

import state from './state/index.state.js';
import * as examplesModule from './modules/examples.module.js';

export const bookReducer = createReducer(
  {
    ...examplesModule.bookReducer,
  },
  state,
);
