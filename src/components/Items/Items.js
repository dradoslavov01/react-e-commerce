import React from 'react'
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../../utils';
import styles from './Items.module.scss'

const Items = ({ data, setCart }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    if (isLoggedIn) {
      addToCart(item, setCart);
    } else {
      navigate('/login');
    }
  }

  return (
    <div className={styles.items_content}>
      {
        data.map(item => {
          return (
            <section key={item._id}>
              <img src={item.image} alt="item_img" />
              <h5>{item.title}</h5>
              <p>{item.price}</p>
              <button onClick={() => handleAddToCart(item)}>Add to cart</button>

            </section>
          )
        })

      }
    </div>
  )
}

export default Items