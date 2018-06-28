## [WIP] Couch Potato Movie Finder
A tdd/bdd based development utilizing [themoviedb.org](https://www.themoviedb.org/) API

### Testing Library
---

[react-testing-library](https://github.com/kentcdodds/react-testing-library)

`Dependencies`
> dom-testing-library

### Personal Goal
Have a feel with TDD/BDD and compare enzyme with react-testing-library

### Requirement
`Node 8.0+`

### Installation
`npm install`

### Test
`npm run test`

### Misc
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

---

### Milestones

* 2018-06-13 - TDD on props validation + function spy invocation
* 2018-06-16 - LOGIN module TDD - Actions and Reducer, Login Form
* 2018-06-22 - REDUX SAGA test with `redux-saga-test-plan`
* 2018-06-27 - LOGIN Container test (Bugfix: replaced `fireEvent` with `Simulate`
* 2018-06-28 - Moved test files accordingly




### TIL (Today I learned)
> 6.13.18

`Spying on console.log/error/warn`

```
global.console = {
  warn: jest.fn(),
  log: jest.fn(),
  error: jest.fn()
}
...
it('then should break if there is no onSubmit props function', () => {
  renderIntoDocument(<Form/>)
  expect(console.error).toHaveBeenCalledTimes(1);
})

```
![progress](https://cdn.pbrd.co/images/HpHaxWP.png)


### TIL 
> 6.27.18

#### Jest.spyOn

> Login Container Test

```
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
```

> Login Container

```
import React from 'react'
import {default as LoginForm } from 'components/Login/Form'
import { Card, Row, Col } from 'antd'
import PropTypes from 'prop-types'

class Login extends React.Component {
  static propTypes = {
    loginService: PropTypes.object.isRequired
  }

  static defaultProps = {
    loginService: undefined
  }

  onSubmit = ({ username, password }) => {
    this.props.loginService.requestLogin({ username, password })
  }

  render() {
    return (
    <div style={{ textAlign: "center",  padding: '30px' }} >
      <Row gutter={16}>
        <Col span={12} offset={6}>
          <Card style={{ width: 300, margin: 'auto' }}>
            <h2 data-testid='login-screen'>Login</h2>
            <LoginForm onSubmit={this.onSubmit}  />
          </Card>
        </Col>
      </Row>
    </div>
  )
  }
}

export default Login
```
