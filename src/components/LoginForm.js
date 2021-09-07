import React, { useState } from 'react'

const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  handleLogin,
  handleRegister,
}) => {
  const [btnType, setBtnType] = useState(0)

  return (
    <form onSubmit={btnType === 1 ? handleRegister : handleLogin}>
      <h2>login</h2>
      <div>
        username
        <input
          id='username'
          type='text'
          value={username}
          name='Username'
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password
        <input
          id='password'
          type='text'
          value={password}
          name='Password'
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button id='login-button' type='submit' onClick={() => setBtnType(0)}>login</button>
      <button id='register-button' type='submit' onClick={() => setBtnType(1)}>register</button>
    </form>
  )
}

export default LoginForm