import React, { FC } from 'react'
import classes from './card.module.css'

type Props = {
    children: JSX.Element
}

const Card :FC<Props> = ({ children }: Props) => (
    <div className={classes.card}>{children}</div>
)

export default Card
