import React from 'react'
import { metadata } from '../layout';
import { AppName } from '../config/config';
import ProductSingleLoader from '../components/Loader/ProductSingleLoader';

const Cookware = () => {
  metadata.title= `Cookware | ${AppName}`;
  metadata.description = `Cookware | Find Everything you need for Cookware.`
  return (
    <div>
      <ProductSingleLoader/>
    </div>
  )
}

export default Cookware