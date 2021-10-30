import React, { FC } from 'react'
import CartIcon from '../cart/cart-icon'
import classes from './button.module.css'
const HeaderCartButton:FC<{onClick: ()=>void}> = ({ onClick }) => (
    <button onClick={onClick} className={classes.button}>
        <span className={classes.icon}><CartIcon/></span>
        <span>Your Cart</span>
        <span className={classes.badge}>3</span>
    </button>
)

export default HeaderCartButton
