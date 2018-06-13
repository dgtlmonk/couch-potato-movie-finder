import React from 'react'
import {default as LoginForm } from 'components/Login/Form'
import { Layout } from 'antd'

const Login = () => {
  return (
    <Layout>
      <h2 data-testid='login-screen'>Login</h2>
      <LoginForm>
      </LoginForm>
    </Layout>
  )
}

export default Login