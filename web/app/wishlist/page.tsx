import React from 'react'
import { metadata } from '../layout';
import { AppName } from '../config/config';

const Wishlist = () => {
  metadata.title= `Wishlist | ${AppName}`;
  metadata.description = `Wishlist | Explore and make a purchase from you wishlist.`
  return (
    <div>Wishlist</div>
  )
}

export default Wishlist