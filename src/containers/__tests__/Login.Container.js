import React from 'react'
import 'jest-dom/extend-expect';
import {cleanup, renderIntoDocument, debug} from 'react-testing-library'
import { default as Login, eventHandler} from 'containers/Login/';

console.log('eventHandler ', eventHandler)

// don't forget to clean up the document.body
afterEach(cleanup)

describe('<Login />', () => {
  let comp
  beforeEach(() => {
    comp = renderIntoDocument(<Login />)
  })

  describe('when rendered', () => {
    it('then it should show login welcome text', () => {
       const { getByTestId } = comp

      expect(getByTestId('login-screen', { selector: 'h2' })).toBeVisible()
    })


  });
})