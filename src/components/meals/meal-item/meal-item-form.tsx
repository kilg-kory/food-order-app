import React, { FC } from 'react'
import classes from './meal-item.module.css'
import Input from '../../ui/input'

const MealItemForm: FC<{id: string}> = ({ id }) => {
  return (
        <form className={classes.form}>
            <Input label="Amount" input={{
              id: 'amount_' + id,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1'
            }} />
            <button>+ Add</button>
        </form>
  )
}

export default MealItemForm
