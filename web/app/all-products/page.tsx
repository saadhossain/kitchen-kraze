'use client'
import { useEffect, useState } from 'react';
import ProductsLoader from '../components/Loader/ProductsLoader';
import { API, AppName } from '../config/config';
import { metadata } from '../layout';
import { ProductType } from '../types/ProductType';
import ProductCard from '../components/common/ProductCard';

const AllProducts = () => {
  // metadata.title = `All Products | ${AppName}`;
  // metadata.description = `All Products | Choose your item among all our products.`;

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<[] | null>();
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch(`${API}/products`);
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

export default AllProducts