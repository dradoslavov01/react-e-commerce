import React from 'react'
import { useNavigate } from 'react-router-dom';
import styles from './Items.module.scss'

const Items = ({ data }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const navigate = useNavigate();

  return (
    <div className={styles.items_content}>
      {
        data.map(item => {
          return (
            <section key={item._id}>
              <img src={item.image} alt="item_img" />
              <h5>{item.title}</h5>
              <p>{item.price}</p>
              {isLoggedIn
                ? <button onClick={() => { }}>Add to cart</button>
                : <button onClick={() => navigate('/login')}>Add to cart</button>
              }
            </section>
          )
        })

      }
    </div>
  )
}

export default Items