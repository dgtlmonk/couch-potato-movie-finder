import React, { Component } from 'react';
import styled from 'styled-components'
import { Layout } from 'antd'
import './App.css';
import {default as LoginContainer } from 'containers/Login'

export const Wrapper = styled(Layout)`
  font-family: 'aktiv-grotesk-std', Helvetica Neue, Arial, sans-serif;
  background: #fff;
  padding: 0;
  ;`

const {Content} = Layout;
class App extends Component {


  render() {
    return (
      <Wrapper>
        <Content>
          <LoginContainer/>
        </Content>
      </Wrapper>
    );
  }
}

export default App;
