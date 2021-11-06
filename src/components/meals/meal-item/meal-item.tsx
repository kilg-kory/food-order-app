import React, { FC, useContext } from 'react'
import classes from './meal-item.module.css'
import MealItemForm from './meal-item-form'
import CartContext, { IItem } from '../../../store/cart-context';



const MealItem :FC<IItem> = ({ id, name, description, price }) => {

   const cartCtx = useContext(CartContext)

  const addToCardHandler = (amount:number) => {
      cartCtx.addItem({id: id, name: name, description: description, amount: amount, price: price })
  
}
  return <li className={classes.meal}>
            <h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            {/*<div className={classes.price}>{`$${price.toFixed(2)}`}</div>*/}
            <div><MealItemForm id={id} onAddToCart={addToCardHandler} /></div>
        </li>
 
 }

export default MealItem
