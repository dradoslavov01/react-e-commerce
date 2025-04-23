import React from 'react'
import { Link } from 'react-router-dom';
import './NavigationBar.scss'

const NavigationBar = (props) => {
  return (
    <nav className="navbar">
      <h1>eCommerce</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="dropdown">
          <a>Category</a>
          <div className="dropdown_content">
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
            <li className="cart_container">
              {props.cart.length > 0
                ? (
                  <span className="cart_counter">{props.cart.length}</span>
                )
                : ''
              }
              <Link to="/cart" className="user">Cart</Link>
            </li>
            <li className="profile_container">
              {props.favoriteItems.length > 0
                ? (
                  <span className="favItems_counter">{props.favoriteItems.length}</span>
                )
                : ''
              }
              <Link to="/profile" className="user">Profile</Link>
            </li>
            <li>
              <Link to="/logout" className="user" onClick={() => { window.location.reload(); localStorage.clear() }}>Logout</Link>
            </li>
          </>
          )
          : <li className="signIn"><Link to="/login">Sign in</Link></li>
        }
      </ul>
    </nav>
  );
}

export default NavigationBar