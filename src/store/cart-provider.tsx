import React, { FC, ReactNode, useReducer } from 'react'
import CartContext, { IContextProp, IItem } from './cart-context'


enum Action {
  ADD,
  REMOVE,
}

interface CartState {
  items: IItem[],
  totalAmount: number
}

interface CartAction {
  type: Action,
  payload: IItem | string
}


const defaultState: CartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state: CartState, action: CartAction): CartState => {

  switch (action.type) {
    case Action.ADD: {
      const item = action.payload as IItem;
      const existingCartItemIndex: number = state.items.findIndex((item) => (item.id === item.id))
      const existingCartItem: IItem = state.items[existingCartItemIndex];

      let updatedItems: IItem[];

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
    default:
      return defaultState
  }
}


const CartProvider: FC<{ children: ReactNode[] }> = ({ children }) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultState)


  const addItemTocCartHandler = (item: IItem): void => { dispatchCartAction({ type: Action.ADD, payload: item } as CartAction) }
  const removeItemFromCartHandler = (id: string): void => { dispatchCartAction({ type: Action.REMOVE, payload: id }) }

  const cartContent: IContextProp = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemTocCartHandler,
    removeItem: removeItemFromCartHandler
  }


  return (
    <CartContext.Provider value={cartContent}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
