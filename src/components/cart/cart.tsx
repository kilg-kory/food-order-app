import React, { FC, useContext, useState } from 'react'
import classes from './cart.module.css'
import Modal from '../ui/modal'
import CartContext, { ICartItem } from '../../store/cart-context'
import CartItem from './cart-item'
import Checkout from './checkout'


export type UserData = {
  name: string,
  street: string,
  postalCode: string,
  city: string
}


const Cart: FC<{ onClose: () => void }> = ({ onClose }) => {

  const [isCheckout, setIsCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [didSubmit, setDidSubmit] = useState(false)
  const cartCtx = useContext(CartContext)



  const cartItemAddHandler = (item: ICartItem) => {
    cartCtx.addItem(item)
  }
  const cartItemRemoveHandler = (id: string) => { cartCtx.removeItem(id) }

  const cartItems = <ul className={classes['cart-items']}>
    {cartCtx.items.map((item: ICartItem) => {
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

  const orderHandler = () => {
    setIsCheckout(true)
  }


  const submitOrderHandler = async (userData: any) => {
    setIsSubmitting(true)
    const response = await fetch('https://study-burger.firebaseio.com/orders.json', {
      method: 'POST',
      body: JSON.stringify({
        user: userData,
        orderItems: cartCtx.items
      })
    })
    setIsSubmitting(false)
    setDidSubmit(true)
    cartCtx.clearCart()
  }


  const modalActions = <div className={classes.actions}>
    <button className={classes.buttonAlt} onClick={onClose}>Close</button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
  </div>

  const cartModalContent = <>
    {cartItems}
    <div className={classes.total}>
      <span>Total Amount:</span><span> {totalAmount}</span>
    </div>
    <>
      {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={onClose} />}
      {!isCheckout && modalActions}
    </>
  </>

  const submittingModalContent = <p>Sending order data...</p>
  const didSubmitModalContent = <div className={classes.actions}>
    <p>Successfully sent othe order!</p>
    <button className={classes.button} onClick={onClose}>Close</button>
  </div>


  return (
    <Modal onClose={onClose}>
      <>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && submittingModalContent}
        {!isSubmitting && didSubmit && didSubmitModalContent}
      </>
    </Modal>
  )
}

export default Cart
