import React from 'react'
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { createMemoryHistory } from 'history'
import styled from 'styled-components'
import { Layout } from 'antd'
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

const LoginMockSvc = {
  requestLogin: (...args) => {
    console.log(...args)
    return true
  }
}

function Routes(){
    return (
      <Router>
        <Wrapper>
          <Content>
            <Switch>
              <Route exact path="/" render={routeProps => <LoginContainer {...routeProps} loginService={LoginMockSvc} />} />
              <Route path="/dashboard" component={Dashboard} />
              <Route component={NoMatch} />
            </Switch>
          </Content>
        </Wrapper>
      </Router>
    )
}

export default Routes

