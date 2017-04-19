import { createAction } from 'redux-act';

import * as examples from '../../core/examples';

export const example = createAction(
  'example action',
);

export const reducer = {
  [example]: (state, payload) =>
    examples.example(state, payload),
};
