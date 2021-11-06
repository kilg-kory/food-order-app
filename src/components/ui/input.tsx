import classes from './input.module.css'
import React from 'react';

type InputProps = {
   
    label: string,
    input: {
        id: string,
        [key:string] : any
    },

}

const Input = React.forwardRef<HTMLInputElement,InputProps>( (props, ref?: React.ForwardedRef<HTMLInputElement>) => {


  const {label, input} = props

  return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input ref={ref} {...input} />
        </div>
  )
})

export default Input
