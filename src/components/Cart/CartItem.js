import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { adjustQty, removeCartItem } from '../../utils';
import styles from './CartItem.module.scss';

const CartItem = ({ item, setCartItems }) => {
  const increment = () => {
    adjustQty(item.id, setCartItems, item.quantity + 1);
  };

  const decrement = () => {
    if (item.quantity > 1) {
      adjustQty(item.id, setCartItems, item.quantity - 1);
    }
  };

  const itemPrice = (item.price * item.quantity).toFixed(2);

  return (
    <section className={styles.cartItem}>
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
      <p>{item.price}$</p>
      <div className={styles.quantity}>
        <button onClick={decrement}>-</button>
        <span>{item.quantity}</span>
        <button onClick={increment}>+</button>
      </div>
      <h2>{itemPrice}$</h2>
      <DeleteForeverIcon
        className={styles.remove_item}
        onClick={() => removeCartItem(item, setCartItems)}
      />
    </section>
  );
};

export default CartItem;
