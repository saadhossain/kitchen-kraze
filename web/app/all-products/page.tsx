import React from 'react'
import { metadata } from '../layout';
import { AppName } from '../config/config';

const AllProducts = () => {
  metadata.title= `All Products | ${AppName}`;
  metadata.description = `All Products | Choose your item among all our products.`
  return (
    <div>AllProducts</div>
  )
}

export default AllProducts