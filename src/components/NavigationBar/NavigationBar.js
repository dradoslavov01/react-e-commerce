import React from 'react'
import { Link } from 'react-router-dom';
import styles from './NavigationBar.module.scss'

const NavigationBar = (props) => {
  return (
    <nav className={styles.navbar}>
      <h1>eCommerce</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className={styles.dropdown}>
          <a>Category</a>
          <div className={styles.dropdown_content}>
            <Link to="/category/clothes">Clothes</Link>
            <Link to="/category/shoes">Shoes</Link>
            <Link to="/category/hats">Hats</Link>
            <Link to="/category/watches">Watches</Link>
          </div>
        </li>
        <li>
          <Link to="/contacts">Contacts</Link>
        </li>
        {props.isLoggedIn
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
            <li className={styles.profile_container}>
              {props.favoriteItems.length > 0
                ? (
                  <span className={styles.favItems_counter}>{props.favoriteItems.length}</span>
                )
                : ''
              }
              <Link to="/profile" className={styles.user}>Profile</Link>
            </li>
            <li>
              <Link to="/logout" className={styles.user} onClick={() => { window.location.reload(); localStorage.clear() }}>Logout</Link>
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