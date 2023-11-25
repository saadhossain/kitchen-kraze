import React from 'react'
import { metadata } from '../layout'
import { AppName } from '../config/config'
import ProductSingleLoader from '../components/Loader/ProductSingleLoader';

const Bakeware = () => {
  metadata.title= `Bakeware | ${AppName}`;
  metadata.description = `Bakeware | Find Everything you need for Bakeware.`
  return (
    <div>
      <ProductSingleLoader/>
    </div>
  )
}

export default Bakeware