import classes from './cart-item.module.css';
import { FC } from 'react';
import { IItem } from '../../store/cart-context';

type CartItemProps = {
  price: number,
  amount: number,
  name: string,
  onRemove: React.MouseEventHandler<HTMLButtonElement>,
  onAdd:  React.MouseEventHandler<HTMLButtonElement>
}

const CartItem:FC<CartItemProps> = ({price, amount, name, onRemove, onAdd}) => {
  const priceStr = `$${price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
