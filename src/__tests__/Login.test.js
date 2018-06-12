import React from 'react'
import 'jest-dom/extend-expect';
import Form from '../components/Login/Form';

import { cleanup, renderIntoDocument } from 'react-testing-library'

afterEach(cleanup)

describe('<Login />', () => {
  describe('when rendered', () => {
    let comp
    beforeEach(() => {
      comp = renderIntoDocument(<Form/>)
    })
    it('should have username field', () => {
      const { getByTestId } = comp
      const inputNode = getByTestId('username', { selector: 'input' })

      expect(inputNode).toBeVisible()
    })

    it('should have password field', () => {
      const { getByTestId } = comp
      const inputNode = getByTestId('password', { selector: 'input' })

      expect(inputNode).toBeVisible()
    })

    it('should have `Login` button', () => {
      const { getByTestId } = comp
      const LoginButton = getByTestId('login', { selector: 'button' })

      expect(LoginButton).toHaveTextContent('Login')
      expect(LoginButton).toBeVisible()
    })
  })
})
