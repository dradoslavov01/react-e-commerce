import React, { useState } from 'react';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Login.module.scss';

const Login = () => {
  const [errorHandler, setErrorHandler] = useState('');
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const onInputChangeHandler = ({ target: { name, value } }) => {
    setLoginData(prevState => ({ ...prevState, [name]: value }));
  };

  const onLoginFormSubmitHandler = async (event) => {
    event.preventDefault();

    const { email, password } = loginData;

    if (!email || !password) {
      setErrorHandler('Please fill in all fields');
      return;
    }

    try {
      const res = await fetch(`http://localhost:5000/users?email=${email}`);
      const users = await res.json();

      if (users.length === 0) {
        setErrorHandler('User not found');
        return;
      }

      const user = users[0];

      if (user.password !== password) {
        setErrorHandler('Incorrect password');
        return;
      }

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', user.username);

      setErrorHandler('');
      navigate('/');
      window.location.reload();
    } catch (err) {
      console.error(err);
      setErrorHandler('Login failed. Please try again.');
    }
  };

  const isFormValid = loginData.email && loginData.password;

  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={onLoginFormSubmitHandler}>
        <h2>Sign In</h2>
        {errorHandler && <div className={styles.errorMsg}>{errorHandler}</div>}

        <label htmlFor="email">Email</label>
        <div className={styles.input_content}>
          <EmailIcon className={styles.icons} />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={onInputChangeHandler}
          />
        </div>

        <label htmlFor="password">Password</label>
        <div className={styles.input_content}>
          <LockIcon className={styles.icons} />
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={loginData.password}
            onChange={onInputChangeHandler}
          />
        </div>

        <button type="submit" disabled={!isFormValid}>Sign In</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </form>
    </div>
  );
};

export default Login;
