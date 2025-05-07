import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CartItem from './CartItem';
import styles from './Cart.module.scss';

const Cart = ({ cart, setCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const price = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalPrice(Number(price).toFixed(2));
  }, [cart]);

  const handlePurchase = () => {
    setCart([]);
    navigate('/');
  };

  return (
    <div className={styles.cart_container}>
      {cart.length > 0 ? (
        <>
          {cart.map(item => (
            <CartItem key={item._id} item={item} setCartItems={setCart} />
          ))}
          <div className={styles.cart_purchase}>
            <button onClick={handlePurchase}>Purchase</button>
            <h2>{totalPrice}$</h2>
          </div>
        </>
      ) : (
        <div className={styles.empty_cart}>
          <h2>Your cart is empty!</h2>
          <p>Visit our <Link to="/">store</Link> and choose the best items for you.</p>
        </div>
      )}
    </div>
  );
};

export default Cart;
