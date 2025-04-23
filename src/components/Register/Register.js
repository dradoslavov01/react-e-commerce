import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import styles from './Register.module.scss'

const Register = () => {
  const [errorHandler, setErrorHandler] = useState('');

  const onRegisterSubmitHandler = async (event) => { }

  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={onRegisterSubmitHandler}>
        <h2>Create an account</h2>
        <div className={styles.errorMsg}>{errorHandler}</div>
        <label htmlFor="username">Username</label>
        <div className={styles.input_content}>
          <PersonIcon className={styles.icons} />
          <input id="username" type="text" name="username" placeholder="Enter your username" />
        </div>
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
        <label htmlFor="pass">Confirm Password</label>
        <div className={styles.input_content}>
          <LockIcon className={styles.icons} />
          <input id="pass" type="password" name="rePass" placeholder="Confirm your password" />
        </div>
        <button>Sign Up</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  )
}

export default Register