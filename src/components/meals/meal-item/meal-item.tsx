import React, { FC } from 'react'
import classes from './meal-item.module.css'
import MealItemForm from './meal-item-form'

export type MealItemProp = {
    id: string,
    name: string,
    description: string,
    price: number
}

const MealItem :FC<MealItemProp> = ({ id, name, description, price }) => {
  return (
        <li className={classes.meal}>
            <h3>{name}</h3>
            <div className={classes.description}>{description}</div>
            <div className={classes.price}>{`$${price.toFixed(2)}`}</div>
            <div><MealItemForm id={id}/></div>
        </li>
  )
}

export default MealItem
