import React from 'react'
import 'jest-dom/extend-expect';
import { cleanup, renderIntoDocument, getByText, Simulate } from 'react-testing-library'
import { default as Dashboard } from 'containers/Dashboard'

// don't forget to clean up the document.body
afterEach(cleanup)

describe('<Dashboard />', () => {
  let comp
  beforeEach(() => {
    comp = renderIntoDocument(<Dashboard/>)
  })

  it('should have welcome text', () => {
    expect(getByText(comp.container, /welcome/i)).toBeTruthy()
  });

  it('should show search bar', () => {
    const { getByTestId } = comp // or by data-testid
    const searchNode = getByTestId('search', { selector: 'Input' })
    expect(searchNode).toBeInTheDOM()
  });

  it('should load initial movie list', () => {
    expect(comp.getByTestId('movie-list').firstChild).toBeInTheDOM()
  });
})