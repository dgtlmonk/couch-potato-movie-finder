import React from 'react'
import 'jest-dom/extend-expect';
import {cleanup, renderIntoDocument, Simulate} from 'react-testing-library'
import { default as Login} from 'containers/Login/';
import LoginSvc from 'services/Login/'


// don't forget to clean up the document.body
afterEach(cleanup)

describe('<Login />', () => {
  let comp
  beforeEach(() => {
      comp = renderIntoDocument(<Login loginService={LoginSvc}/>)
  })

  it('should show login welcome text', () => {
      const { getByTestId } = comp

      expect(getByTestId('login-screen', { selector: 'h2' })).toBeVisible()
  })

  it('should authenticated on user Login', async () => {
    const loginSpy = jest.spyOn(LoginSvc, 'requestLogin');

    const { getByTestId } = comp,
        LoginButton = getByTestId('submit', { selector: 'Button' }),
        usernameInput = getByTestId('username', { selector: 'Input' }),
        passwordInput = getByTestId('password', { selector: 'Input' });

      const expectedValue = {
        username: 'chuckies',
        password: 'norris'
      },
      { username, password } = expectedValue;

        usernameInput.value = username
        passwordInput.value = password

        Simulate.change(passwordInput, { target: { value: password } });
        Simulate.change(usernameInput, { target: { value: username } });
        LoginButton.click()

        expect(loginSpy).toHaveBeenCalled();
        expect(loginSpy).toHaveBeenCalledWith({
          username,
          password
        });
  })
})