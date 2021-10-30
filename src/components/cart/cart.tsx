import React, { FC } from 'react'
import classes from './cart.module.css'
import Modal from '../ui/modal'

const Cart:FC<{onClose: () => void}> = ({ onClose }) => {
  const cartItems = <ul className={classes['cart-items']}>
      {[{ id: 'm1', name: 'Borsch', price: 15, description: 'Ocena vikusno blya' }].map(item => {
        return <li key={item.id}>{item.name}</li>
      })}
  </ul>

  return (
        <Modal onClose={onClose}>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount:</span><span> 33.34</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes.buttonAlt} onClick={onClose}>Close</button>
                    <button className={classes.button}>Order</button>
                </div>
        </Modal>
  )
}

export default Cart
