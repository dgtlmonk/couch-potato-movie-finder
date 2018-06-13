import React from 'react'
import 'jest-dom/extend-expect';
import { default as Form} from '../components/Login/Form';
import { cleanup, renderIntoDocument } from 'react-testing-library'


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

    it('then it should have username field', () => {
      const { getByLabelText } = comp  // by label
      const inputNode = getByLabelText('Username')
      expect(inputNode).toBeInTheDOM()
    })

    it('then it should have password field', () => {
      const { getByTestId } = comp // or by data-testid
      const inputNode = getByTestId('password', { selector: 'input' })

      expect(inputNode).toBeInTheDOM()
    })

    it('then it should have `Login` button', () => {
      const { getByText } = comp
      const LoginButton = getByText('Login', { selector: 'button' })
      expect(LoginButton).toHaveTextContent('Login')
      expect(LoginButton).toBeInTheDOM()
    })

    it('then should break if there is no onSubmit props function', () => {
        expect(console.error).toHaveBeenCalledTimes(1);
    })
  })

  describe('when `Login` button is pressed', () => {
    let comp
    const handleSubmit = jest.fn()

    beforeEach(() => {
      comp = renderIntoDocument(<Form onSubmit={handleSubmit} />)
    })

    it('then it should submit payload with `username` and `password`', () => {
      const { getByText, getByTestId } = comp,
        LoginButton = getByText('Login', { selector: 'button' }),
        usernameInput = getByTestId('username', { selector: 'input' }),
        passwordInput = getByTestId('password', { selector: 'input' })

        usernameInput.value = "chuck"
        passwordInput.value = "norris"

     LoginButton.click()
      expect(handleSubmit).toHaveBeenCalledTimes(1);
      expect(handleSubmit).toHaveBeenCalledWith({
        username: 'chuck',
        password: 'norris'
      });

    })
  });
})
