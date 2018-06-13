import React from 'react'
import 'jest-dom/extend-expect';
import {cleanup, renderIntoDocument} from 'react-testing-library'
import {default as Login} from '../containers/Login/';

// don't forget to clean up the document.body
afterEach(cleanup)

describe('<Login />', () => {
  let comp
  beforeEach(() => {
    comp = renderIntoDocument(<Login />)
  })

  describe('when rendered', () => {
    it('then should show login welcome text', () => {
       const { getByTestId } = comp

      expect(getByTestId('login-screen', { selector: 'h2' })).toBeInTheDOM()
    })
  });
})