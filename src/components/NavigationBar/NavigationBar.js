import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.scss'

const NavigationBar = (props) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  const loginOutHandler = () => {
    localStorage.clear()
    window.location.reload();
  }

  return (
    <nav className={styles.navbar}>
      <h1>eCommerce</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        {isLoggedIn
          ? (<>
            <li className={styles.cart_container}>
              {props.cart.length > 0
                ? (
                  <span className={styles.cart_counter}>{props.cart.length}</span>
                )
                : ''
              }
              <Link to="/cart" className={styles.user}>Cart</Link>
            </li>
            <li>
              <Link to="/logout" className={styles.user} onClick={loginOutHandler}>Logout</Link>
            </li>
          </>
          )
          : <li className={styles.signIn}><Link to="/login">Sign in</Link></li>
        }
      </ul>
    </nav>
  );
}

export default NavigationBar