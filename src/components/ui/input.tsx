import React, { FC } from 'react'
import classes from './input.module.css'

type InputProps = {
    label: string
    input: {
        id: string,
        [key:string] : any
    }

}

const Input:FC<InputProps> = ({ label, input }) => {
  return (
        <div className={classes.input}>
            <label htmlFor={input.id}>{label}</label>
            <input {...input} />
        </div>
  )
}

export default Input
