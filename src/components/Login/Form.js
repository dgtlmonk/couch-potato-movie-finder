import React from 'react'

const Form = () => {
  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
          <input data-testid="username" type="text" id="username"/>

        <label htmlFor="password">Password</label>
          <input data-testid="password" type="password" id="password" />

        <button data-testid="login" type="submit">Login</button>
      </form>
    </div>
  )
}

export default Form
