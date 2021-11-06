import React, { FC, ReactNode, useReducer } from 'react'
import CartContext, { IContextProp, ICartItem } from './cart-context'


enum Action {
  ADD,
  REMOVE,
  CLEAR,
}

interface CartState {
  items: ICartItem[],
  totalAmount: number
}

interface CartAction {
  type: Action,
  payload?: ICartItem | string
}


const defaultState: CartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state: CartState, action: CartAction): CartState => {

  switch (action.type) {
    case Action.ADD: {
      const item = action.payload as ICartItem;
      const existingCartItemIndex: number = state.items.findIndex((i) => (i.id === item.id))
      const existingCartItem: ICartItem = state.items[existingCartItemIndex];

      let updatedItems: ICartItem[];

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + item.amount
        }

        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem
      } else {
        updatedItems = state.items.concat(item)
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount + item.price * item.amount
      }
    }


    case Action.REMOVE: {
      const id = action.payload as string
      const existingCartItemIndex = state.items.findIndex((item) => item.id === id)
      const existingCartItem = state.items[existingCartItemIndex]
      const updatedTotalAmount = state.totalAmount - existingCartItem.price

      let updatedItems;

      if (existingCartItem.amount === 1) {
        updatedItems = state.items.filter(item => item.id !== id)
      } else {
        const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 }
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem

      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount
      }
    }

    case Action.CLEAR: {
      return defaultState
    }

    default:
      return defaultState
  }
}


const CartProvider: FC<{ children: ReactNode[] }> = ({ children }) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)


  const addItemTocCartHandler = (item: ICartItem): void => { dispatchCartAction({ type: Action.ADD, payload: item }) }
  const removeItemFromCartHandler = (id: string): void => { dispatchCartAction({ type: Action.REMOVE, payload: id }) }
  const clearCartHandler = () => { dispatchCartAction({ type: Action.CLEAR }) }

  const cartContent: IContextProp = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemTocCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler

  }


  return (
    <CartContext.Provider value={cartContent}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
