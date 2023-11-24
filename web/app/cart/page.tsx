import React from 'react'
import { AppName } from '../config/config';
import { metadata } from '../layout';

const Cart = () => {
  metadata.title= `Cart | ${AppName}`;
  metadata.description = `Cart | Review your Cart items and Complete Checkout.`
  return (
    <div>Cart</div>
  )
}

export default Cart