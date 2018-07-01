import React from 'react'
import { withRouter } from 'react-router'
import { Link, Route, Router, Switch } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent, cleanup } from 'react-testing-library'
import Login from 'containers/Login'
import Dashboard from 'containers/Dashboard'

const NoMatch = () => <div>No match</div>

const LoginMockSvc = {
  requestLogin: (...args) => {
    console.log(...args)
    return true
  }
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={routeProps => <Login {...routeProps} loginSvc={LoginMockSvc} />} />
        <Route path="/dashboard" component={Dashboard}/>
        <Route component={NoMatch}/>
      </Switch>
    </div>
  )
}

afterEach(cleanup)

// this is a handy function that I would utilize for any component
// that relies on the router being in context
function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}


test('full app rendering/navigating', () => {
  const { container, getByText } = renderWithRouter(<App />)
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(getByText(/login/i)).toBeTruthy()
  // const leftClick = { button: 0 }
  // fireEvent.click(getByText(/about/i), leftClick)
  // normally I'd use a data-testid, but just wanted to show this is also possible
  // expect(container.innerHTML).toMatch('You are on the about page')
})