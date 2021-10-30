import React, { FC, Fragment } from 'react'
import classes from './header.module.css'
import HeaderCartButton from './header-cart-button'

const Header:FC<{onShowCart: () => void}> = ({ onShowCart }) => (
    <Fragment>
        <header className={classes.header}>
            <h1>React Meat</h1>
            <HeaderCartButton onClick={onShowCart} />
        </header>
        <div className={classes.img}>img</div>
    </Fragment>
)

export default Header
