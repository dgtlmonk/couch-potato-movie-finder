import { fromJS } from 'immutable';
import { handleActions } from "redux-actions";
import { REQUEST} from "./constants";
import { LOGIN } from "./actions";

import {
  action
} from './actions';

export const InitialState = fromJS({
  loggedin: false,
});

const loginReducer = handleActions({
  'LOGIN_REQUEST': state => {
    return state.set('loggedin', true)
  },
}, InitialState);

export default loginReducer;
