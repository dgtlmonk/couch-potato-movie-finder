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