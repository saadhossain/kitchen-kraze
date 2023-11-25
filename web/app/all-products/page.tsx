import React from 'react'
import { metadata } from '../layout';
import { AppName } from '../config/config';
import ProductsLoader from '../components/Loader/ProductsLoader';

const AllProducts = () => {
  metadata.title= `All Products | ${AppName}`;
  metadata.description = `All Products | Choose your item among all our products.`
  return (
    <div>
      <ProductsLoader cardCount={12}/>
    </div>
  )
}

export default AllProducts