import { createAction } from "redux-actions";
import { REQUEST, FULFILLED, FAILED } from "./constants"

function createRequestTypes(base) {
  return [REQUEST, FULFILLED, FAILED].reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

/**
 * generates QA_EXTINGUISH_TASK_REQUEST, QA_EXTINGUISH_TASK_FULFILLED, QA_EXTINGUISH_TASK_FAILED
 * ... etc, accordingly
 */
export const LOGIN = createRequestTypes('LOGIN')

export const action = {
  login: createAction(LOGIN[REQUEST]),
};


