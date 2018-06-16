import { fromJS } from 'immutable';
import { handleActions } from "redux-actions";
import { LOGIN } from "./constants";
import { REQUEST } from "./actions";

import {
  action
} from './actions';

const InitialState = fromJS({});

const loginReducer = handleActions(
  {
    [LOGIN[REQUEST]]: (state = InitialState, action) => {
      return InitialState
    }
  },
  InitialState,
);

export default qaReducer;
