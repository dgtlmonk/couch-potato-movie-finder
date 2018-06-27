
import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';


const createAction = {
  type: 'LOGIN_REQUEST',
  payload: {
    username: 'chuck',
    password: 'norris'
  }
}

const successMeta = {
  status: 'OK',
  metadata: {
    username: 'chuck',
    permission: 0,
    account_id: '507f1f77bcf86cd799439011',
    email: 'chuck.norris@gmail.com'
  }
}

const errorMeta = {
  status: 503,
  message: 'Access Denied'
}

const api = {
  requestLogin: async () => {
  }
}

function* loginRequest(api) {
  const action = yield take(createAction.type);
  const req = yield call(api.requestLogin, action.payload);

  yield put({ type: 'LOGIN_SUCCESS', payload: req });
}

const SagaProvider = {
  call(effect, next) {
    // Check for the API call to return fake value
    if (effect.fn === api.requestLogin) {
      const creds = effect.args[0];

      // mock validation
      if (creds.password !== 'norris')
        return errorMeta

      return successMeta
    }

    // Allow Redux Saga to handle other `call` effects
    return next();
  },
}

describe('Login SAGA', () => {
  it('should take `LOGIN_REQUEST` action request', () => {
    return expectSaga(loginRequest, api)
      .provide(SagaProvider)
      .take(createAction.type)

      // Dispatch any actions that the saga will `take`.
      .dispatch({
        type: 'LOGIN_REQUEST',
        payload: {
          username: 'chuck',
          password: 'morris'
        }
      })

      // Start the test. Returns a Promise.
      .run();
  })

  describe('handles failed or successful authentication', () => {
    it('then it should invalidate wrong credentials', () => {
      return expectSaga(loginRequest, api)
        .provide(SagaProvider)

        .take(createAction.type)
        // Assert that the `put` will eventually happen.
        .put({
          type: 'LOGIN_SUCCESS',
          payload: errorMeta
        })

        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: 'LOGIN_REQUEST',
          payload: {
            username: 'chuck',
            password: 'morris'
          }
        })

        // Start the test. Returns a Promise.
        .run();
    })

    it('and it should validate correct credentials', () => {
      return expectSaga(loginRequest, api)
        .provide(SagaProvider)
        .take(createAction.type)

        // Assert that the `put` will eventually happen.
        .put({
          type: 'LOGIN_SUCCESS',
          payload: successMeta}
        )

        // Dispatch any actions that the saga will `take`.
        .dispatch({
          type: 'LOGIN_REQUEST',
          payload: {
            username: 'chuck',
            password: 'norris'
          }
        })

        // Start the test. Returns a Promise.
        .run();
    })
  });

})
