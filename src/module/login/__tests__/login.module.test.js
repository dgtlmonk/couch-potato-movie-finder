import configureMockStore from 'redux-mock-store'
import createSagaMiddleware from 'redux-saga';
import { REQUEST } from '../constants'
import { action, LOGIN } from '../actions'

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware]
const mockStore = configureMockStore(middlewares)

describe('Login Redux Module', () => {
  describe('Login ACTIONS', () => {
    it('should return initial state', () => {

    })

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
});