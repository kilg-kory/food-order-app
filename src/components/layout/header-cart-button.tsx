import { useContext, useEffect, useState } from 'react'
import React, { FC } from 'react'

import CartIcon from '../cart/cart-icon'
import classes from './button.module.css'
import CartContext, { IContextProp, IItem } from '../../store/cart-context';

const HeaderCartButton: FC<{ onClick: () => void }> = ({ onClick }) => {

    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)
    const cartCtx: IContextProp = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => { return curNumber + item.amount }, 0)

    const { items } = cartCtx
    const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

    useEffect(() => {
        if (cartCtx.items.length === 0) {
            return
        }
        setBtnIsHighlighted(true)

        const timer = setTimeout(() => { setBtnIsHighlighted(false) }, 300)

        return () => {
            clearTimeout(timer)
        }
    }, [items])



    return (
        <button onClick={onClick} className={btnClasses}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    )
}

export default HeaderCartButton
