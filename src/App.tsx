import React, { Fragment, useState } from 'react'
import Header from './components/layout/header'
import Meals from './components/meals/meals'
import Cart from './components/cart/cart'

function App () {
  const [cartIsShown, setCartIsShown] = useState(false)
  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  return (
        <Fragment>
           { cartIsShown && <Cart onClose={hideCartHandler} /> }
            <Header onShowCart={showCartHandler} />
            <main>
                <Meals name="Name" value="Value"/>
            </main>
        </Fragment>
  )
}

export default App
