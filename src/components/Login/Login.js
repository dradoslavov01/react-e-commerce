import React, { useState } from 'react'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss'

const Login = () => {
  const [errorHandler, setErrorHandler] = useState('');

  const onLoginFormSubmitHandler = async (event) => { }

  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={onLoginFormSubmitHandler}>
        <h2>Sign In</h2>
        <div className={styles.errorMsg}>{errorHandler}</div>
        <label htmlFor="email">Email</label>
        <div className={styles.input_content}>
          <EmailIcon className={styles.icons} />
          <input id="email" type="text" name="email" placeholder="Enter your email" />
        </div>
        <label htmlFor="pass">Password</label>
        <div className={styles.input_content}>
          <LockIcon className={styles.icons} />
          <input id="pass" type="password" name="password" placeholder="Enter your password" />
        </div>
        <button>Sign In</button>
        <p> Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  )
}

export default Login