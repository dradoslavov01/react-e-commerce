import React, { useState } from 'react'
import styles from './Contacts.module.scss'

const Contacts = () => {
  const [feedback, setFeedback] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const sendMsg = (e) => {
    e.preventDefault();

    let name = e.target.name.value;
    let email = e.target.email.value;
    let msg = e.target.msg.value;

    if (!name || !email || !msg) {
      return setErrorMsg(true);
    } else {
      setErrorMsg(false);
      e.target.name.value = '';
      e.target.email.value = '';
      e.target.msg.value = '';
    }

    setFeedback(true);
    setTimeout(() => {
      setFeedback(false)
    }, 4000);
  };

  return (
    <>
      {feedback
        ? <div className={styles.feedback_msg}>
          <h3>Thank you for contacting us!</h3>
        </div>
        : ''
      }
      <div className={styles.contacts_container}>
        <form onSubmit={sendMsg}>
          <h2>Contact Us</h2>
          {errorMsg
            ? <div className={styles.errorMsg}>
              <p>All fields are required!</p>
            </div>
            : ''
          }
          <input type="text" name="name" placeholder="Enter your Name" />
          <input type="text" name="email" placeholder="Enter a valid email addres" />
          <textarea cols="20" rows="5" type="text" name="msg" placeholder="Enter your message" />
          <button>Send</button>
        </form>

      </div>
    </>
  )
}

export default Contacts