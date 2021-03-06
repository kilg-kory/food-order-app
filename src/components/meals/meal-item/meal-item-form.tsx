import React, { FC, useState } from 'react'
import classes from './meal-item.module.css'
import Input from '../../ui/input'

const MealItemForm: FC<{id: string, onAddToCart: (amount: number) => void}> = ({ id,  onAddToCart }) => {

  const amountInputRef = React.useRef<HTMLInputElement>(null);
  const [amountIsValid, setAmountIsValid] = useState(true)

  const submitHandler = (event: React.SyntheticEvent) => {
      event.preventDefault();
      const enteredAmount = amountInputRef!.current!.value
      const enteredAmountNumber = +enteredAmount

      if(enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5 ) {
        setAmountIsValid(false)
        return
      }

      onAddToCart(enteredAmountNumber)


  }
  

  return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input
             ref={amountInputRef}
             label="Amount" 
             input={{
              id: 'amount_' + id,
              type: 'number',
              min: '1',
              max: '5',
              step: '1',
              defaultValue: '1'
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
        </form>
  )
}

export default MealItemForm
