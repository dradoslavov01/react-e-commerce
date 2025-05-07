import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import styles from './Register.module.scss';

const Register = () => {
  const [errorHandler, setErrorHandler] = useState('');
  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
    rePass: '',
  });

  const navigate = useNavigate();

  const handleInputChange = ({ target: { name, value } }) => {
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const { username, email, password, rePass } = userData;
    if (!username || !email || !password || !rePass) {
      setErrorHandler('Please fill in all fields');
      return;
    }

    if (password !== rePass) {
      setErrorHandler('Passwords do not match');
      return;
    }
    
    setErrorHandler('');
    try {
      const response = await fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) throw new Error('Registration failed');

      const result = await response.json();
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', result.username);

      navigate('/');
      window.location.reload();
    } catch (error) {
      setErrorHandler(error.message || 'Something went wrong. Please try again.');
    }
  };

  const isFormValid = userData.username && userData.email && userData.password && userData.rePass && userData.password === userData.rePass;

  return (
    <div className={styles.form_container}>
      <form className={styles.form} onSubmit={handleFormSubmit}>
        <h2>Create an account</h2>
        {errorHandler && <div className={styles.errorMsg}>{errorHandler}</div>}

        <label htmlFor="username">Username</label>
        <div className={styles.input_content}>
          <PersonIcon className={styles.icons} />
          <input
            id="username"
            type="text"
            name="username"
            placeholder="Enter your username"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="email">Email</label>
        <div className={styles.input_content}>
          <EmailIcon className={styles.icons} />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={userData.email}
            onChange={handleInputChange}
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
            value={userData.password}
            onChange={handleInputChange}
          />
        </div>

        <label htmlFor="rePass">Confirm Password</label>
        <div className={styles.input_content}>
          <LockIcon className={styles.icons} />
          <input
            id="rePass"
            type="password"
            name="rePass"
            placeholder="Confirm your password"
            value={userData.rePass}
            onChange={handleInputChange}
          />
        </div>

        <button type="submit" disabled={!isFormValid}>
          Sign Up
        </button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </form>
    </div>
  );
};

export default Register;
