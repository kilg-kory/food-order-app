import React from 'react'

interface IItem {
    id: string,
    price: number,
    count: number
}

export interface IContextProp {
    items: IItem[],
    totalAmount: 0,
    addItem: (item: any) => {},
    removeItem: (item: any) => {},

}

const CartContext = React.createContext({} as IContextProp)

export default CartContext
