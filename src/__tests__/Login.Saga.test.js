
import { call, put, take } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import axios from 'axios' // v0.15.3
import httpAdapter from 'axios/lib/adapters/http'
import nock from 'nock'
// import fetch from 'jest-fetch-mock'


const endpoint = 'http://localhost'
const service = 'login'

// https://github.com/nock/nock/issues/699
axios.defaults.host = endpoint;
axios.defaults.adapter = httpAdapter;

nock(endpoint)
.post(`/${service}`)
.reply(200,  {
  'Access-Control-Allow-Origin': '*',
  status: 'OK',
  meta: {
    username: 'chuck',
    permission: 0,
    account_id: '507f1f77bcf86cd799439011',
    email: 'chuck.norris@gmail.com'
  }
});

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
    let result = {}
    const request = await axios.post(`/${service}`).then(res => {
      result = res
    })

    return result.data

  }
}

function* loginRequest(api, payload) {
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
  it('should handle `LOGIN_REQUEST`', () => {
    return expectSaga(loginRequest, api, {
      username: 'chuck',
      password: 'morris'
    })
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

  // it('should put `LOGIN_SUCCESS` or `LOGIN_FAILED` accordingly', () => {
  //   beforeEach(() => {
  //     fetch.resetMocks()
  //   })

  //   fetch.mockResponseOnce(JSON.stringify({
  //     status: 'OK',
  //     meta: successMeta
  //   }))

  //   return expectSaga(loginRequest, api, createAction.payload)

  //   // Assert that the `put` will eventually happen.
  //   .take(createAction.type)
  //   .put({
  //     type: 'LOGIN_SUCCESS',
  //     payload: successMeta,
  //   })

  //   // Dispatch any actions that the saga will `take`.
  //   .dispatch(createAction)

  //   // Start the test. Returns a Promise.
  //   .run();

  //   // TODO: assert on this
  //   // const expectedActions = [
  //   //   { type: 'SET_ACCESS_TOKEN_FAILED', error: { status: 503 } }
  //   // ]
  //   // fetch.mockReject(new Error('fake error message'))

  // });
})
