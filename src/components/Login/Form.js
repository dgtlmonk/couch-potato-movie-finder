import React from 'react'
import PropTypes from 'prop-types'

const Form = ({onSubmit}) => {
  return (
    <div>
      <form onSubmit={e => {
        const {username, password} = e.target.elements;
        e.preventDefault()
        onSubmit({
          username: username.value,
          password: password.value
        })
      }}>
        <label htmlFor="username">Username</label>
          <input data-testid="username" type="text" id="username"/>

        <label htmlFor="password">Password</label>
          <input data-testid="password" type="password" id="password" />

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

Form.propTypes = {
  onSubmit : PropTypes.func.isRequired
}
export default Form
