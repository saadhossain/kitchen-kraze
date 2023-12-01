'use client'
import React, { useEffect, useState } from 'react'
import { metadata } from '../layout';
import { API, AppName } from '../config/config';
import ProductsLoader from '../components/Loader/ProductsLoader';
import { ProductType } from '../types/ProductType';
import ProductCard from '../components/common/ProductCard';

const ToolsAndGadgets = () => {
  // metadata.title= `Cookware | ${AppName}`;
  // metadata.description = `Cookware | Find Everything you need for Cookware.`
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<[] | null>();
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch(`${API}/products/category?categoryName=Tools_Gadgets`);
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }
    getProducts();
  },
    []);
  if(loading){
    return <ProductsLoader cardCount={8}/>
  }
  return (
    <div className='w-10/12 mx-auto my-10 grid grid-cols-4 gap-5'>
      {
        products?.map((product:ProductType)=><ProductCard key={product._id} product={product}/>)
      }
    </div>
  )
}

export default ToolsAndGadgets