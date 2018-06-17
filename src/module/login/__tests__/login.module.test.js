import configureStore from 'redux-mock-store'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { REQUEST } from '../constants'
import { action, LOGIN } from '../actions'
import loginReducer, { InitialState } from '../reducer'


const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]
const mockStore = configureStore(middlewares)

const store = createStore(
  loginReducer,
  InitialState,
  applyMiddleware(...middlewares)
)

describe('Login Redux Module', () => {
  describe('Login ACTIONS', () => {

    it('should handle LOGIN_REQUEST action', () => {
      const payload = {
        data: {
          username: 'chuck',
          password: 'norris'
        }
      }
      const expectedAction = {
        type: LOGIN[REQUEST],
        payload: {...payload}
      }

      expect(action.login()).toHaveProperty('type', expectedAction.type);
      expect(action.login({...payload})).toHaveProperty('payload.data', payload.data);
    })
  });

  describe('Login REDUCER', () => {

    // it('should dispatch action', () => {
    //   store.dispatch(action.login())
    //   console.log(store)

    // Test if your store dispatched the expected actions
    // const actions = store.getActions()
    // const expectedPayload = { type: LOGIN[REQUEST] }
    // expect(actions).toEqual([expectedPayload])
    // })

    it('should throw an error when the action is undefined', () => {
      expect(() => { store.dispatch(undefined) }).toThrow(
        'Actions must be plain objects. ' +
        'Use custom middleware for async actions.'
      )
    })

    it('should execute fetch data', () => {
      store.dispatch(action.login())

      const newState = store.getState().toJS()
      expect(newState).toHaveProperty('loggedin', true)
    })


    it('should reduce when LOGIN_REQUEST action is received', () => {

    });
  });

  describe('Login SAGA', () => {
    it('should watch takeLatest LOGIN_REQUEST', () => {

    });

  });
});