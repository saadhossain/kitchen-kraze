import React from 'react'
import { metadata } from '../layout';
import { AppName } from '../config/config';
import ProductSingleLoader from '../components/Loader/ProductSingleLoader';

const ToolsAndGadgets = () => {
  metadata.title= `Tools and Gadgets | ${AppName}`;
  metadata.description = `Tools and Gadgets | Find Everything you need for Tools and Gadgets.`
  return (
    <div>
      <ProductSingleLoader/>
    </div>
  )
}

export default ToolsAndGadgets