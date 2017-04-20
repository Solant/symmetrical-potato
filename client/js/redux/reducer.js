import { createReducer } from 'redux-act';

import state from './state/index.state';
import * as examplesModule from './modules/examples.module';

export default createReducer(
  {
    ...examplesModule.bookReducer,
  },
  state,
);
