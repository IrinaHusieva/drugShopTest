import React, { useEffect } from 'react';
import css from './Cart.module.css'

import { useCart } from '../../cartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className={css.container}>
      <form className={css.form}>
  <div className={css.inputContainer}>
    <label className={css.label} htmlFor="name">Name:</label>
    <input id="name" type="text" name="name" />
  </div>
  <div className={css.inputContainer}>
    <label className={css.label} htmlFor="email">Email:</label>
    <input id="email" type="email" name="email" />
  </div>
  <div className={css.inputContainer}>
    <label className={css.label} htmlFor="phone">Phone:</label>
    <input id="phone" type="tel" name="phone" />
  </div>
  <div className={css.inputContainer}>
    <label className={css.label} htmlFor="adress">Adress:</label>
    <input id="adress" type="text" name="adress" />
        </div>
        <button className={css.cartBtn}type='submit'>Send order</button>
</form>
      <div>
        <ul>
         {cart && cart.map((item, index) => (
  <li key={index}>
    {item.name}
    <button onClick={() => removeFromCart(index)}>Remove</button>
  </li>
))}
        </ul>
</div>
    </div>
  )
}

export default CartPage