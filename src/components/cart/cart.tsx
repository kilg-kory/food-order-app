import React, { FC, useContext } from 'react'
import classes from './cart.module.css'
import Modal from '../ui/modal';
import CartContext, { IItem } from '../../store/cart-context';
import CartItem from './cart-item';

const Cart: FC<{ onClose: () => void }> = ({ onClose }) => {

  const cartCtx = useContext(CartContext)



  const cartItemAddHandler = (item: IItem) => { 
      cartCtx.addItem(item)
   }
  const cartItemRemoveHandler = (id: string) => { cartCtx.removeItem(id) }

  const cartItems = <ul className={classes['cart-items']}>
    {cartCtx.items.map((item: IItem) => {
      return <CartItem
        key={item.id}
        name={item.name} 
        amount={item.amount}
        price={item.price}
        onAdd={cartItemAddHandler.bind(null, item)}
        onRemove={cartItemRemoveHandler.bind(null, item.id)} />
    })}
  </ul>

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
  const hasItems = cartCtx.items.length > 0


  return (
    <Modal onClose={onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount:</span><span> {totalAmount}</span>
      </div>

      <div className={classes.actions}>
        <button className={classes.buttonAlt} onClick={onClose}>Close</button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default Cart
