import React from 'react'
import { Link, Route, Router, Switch } from 'react-router-dom'

import {createMemoryHistory} from 'history'
import styled from 'styled-components'
import {Layout} from 'antd'
import { default as LoginContainer } from 'containers/Login'
import Dashboard from 'containers/Dashboard'
import 'App.css';

const Wrapper = styled(Layout)`
  font-family: 'aktiv-grotesk-std', Helvetica Neue, Arial, sans-serif;
  background: #fff;
  padding: 0;
  ;`

const NoMatch = () => <div>No match</div>
const { Content } = Layout;

const LoginMockSvc  = {
  requestLogin: (...args) => {
    console.log(...args)
    return true
  }
}

class App extends React.Component {
  render() {
    return(
      <Wrapper>
        <Content>
          <Router>
          <Switch>
            <Route exact path="" render={routeProps => <LoginContainer {...routeProps} loginService={LoginMockSvc} />} />
            <Route path="/dashboard" component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>
          {
            // <LoginContainer loginService={LoginMockSvc} />
          }
          </Router>
        </Content>
      </Wrapper>
    )
  }
}

export default App

