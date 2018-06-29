import React from 'react'
import 'jest-dom/extend-expect';
import { default as Form} from 'components/Login/Form';
import { cleanup, renderIntoDocument, Simulate } from 'react-testing-library'

global.console = {
  warn: jest.fn(),
  log: jest.fn(),
  error: jest.fn()
}

// don't forget to clean up the document.body
afterEach(() => {
  cleanup()
})

describe('<Login />', () => {

  describe('when rendered', () => {
    let comp

    beforeEach(() => {
      comp = renderIntoDocument(<Form/>)
    })

    it('then username field should be visible', () => {
      const { getByLabelText } = comp  // by label
      const inputNode = getByLabelText('Username')
      expect(inputNode).toBeInTheDOM()

    })

    it('then password field should be visible', () => {
      const { getByTestId } = comp // or by data-testid
      const inputNode = getByTestId('password', { selector: 'Input' })

      expect(inputNode).toBeInTheDOM()
    })

    it('then `Login` button should be visible', () => {
      const { getByTestId } = comp
      const LoginButton = getByTestId('submit', { selector: 'Button' })
      expect(LoginButton).toHaveTextContent('Login')
      expect(LoginButton).toBeInTheDOM()
    })
  })

  describe('when `Login` button is pressed', () => {
    let comp
    const handleSubmit = jest.fn()

    beforeEach(() => {
      comp = renderIntoDocument(<Form onSubmit={handleSubmit} />)
    })

    it('then it should submit with payload `username` and `password`', async () => {
      const { getByTestId, form } = comp,
        LoginButton = getByTestId('submit', { selector: 'Button' }),
        usernameInput = getByTestId('username', { selector: 'Input' }),
        passwordInput = getByTestId('password', { selector: 'Input' });

      const expectedValue = {
        username: 'chucke',
        password: 'norris'
      },
      { username, password } = expectedValue;

        usernameInput.value = username
        passwordInput.value = password

        Simulate.change(passwordInput, { target: { value: password } });
        Simulate.change(usernameInput, { target: { value: username } });
        LoginButton.click()

      expect(handleSubmit).toHaveBeenCalledTimes(1);
      expect(handleSubmit).toHaveBeenCalledWith({
        username,
        password
      });
    })
  });
})
