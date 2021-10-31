import React from 'react'

export interface IItem {
    id: string,
    name: string,
    price: number,
    amount: number
}

export interface IContextProp {
    items: IItem[],
    totalAmount: number,
    addItem: (item: IItem) => void,
    removeItem: (id: string) => void

}

const CartContext = React.createContext({} as IContextProp)

export default CartContext
