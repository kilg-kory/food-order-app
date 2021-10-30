import React, { FC } from 'react'
import CartContext, { IContextProp } from './cart-context'

const CartProvider:FC<{children: JSX.Element | JSX.Element[]}> = ({ children }) => {
  return (
        <CartContext.Provider value={{} as IContextProp}>
            {children}
        </CartContext.Provider>
  )
}

export default CartProvider
