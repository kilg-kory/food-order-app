import React, { Fragment, useState } from 'react'
import Header from './components/layout/header'
import Meals from './components/meals/meals'
import Cart from './components/cart/cart'
import CartProvider from './store/cart-provider';

function App () {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
        <CartProvider>
           { cartIsShown && <Cart onClose={hideCartHandler} /> }
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals name="Name" value="Value"/>
            </main>
        </CartProvider>
  )
}

export default App
