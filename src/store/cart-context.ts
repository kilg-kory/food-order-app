import React from 'react'


export interface IItem {
    id: string,
    name: string,
    description: string,
    price: number
}



export interface ICartItem extends IItem {
    amount: number
}

export interface IContextProp {
    items: ICartItem[],
    totalAmount: number,
    addItem: (item: ICartItem) => void,
    removeItem: (id: string) => void,
    clearCart: () => void

}

const CartContext = React.createContext({} as IContextProp)

export default CartContext
