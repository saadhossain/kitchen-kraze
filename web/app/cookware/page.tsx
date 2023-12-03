'use client'
import { useQuery } from '@tanstack/react-query';
import ProductsLoader from '../components/Loader/ProductsLoader';
import ProductCard from '../components/common/ProductCard';
import { API } from '../config/config';
import { ProductType } from '../types/ProductType';

const Cookware = () => {
  // metadata.title= `Cookware | ${AppName}`;
  // metadata.description = `Cookware | Find Everything you need for Cookware.`
  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const res = await fetch(`${API}/products/category?categoryName=Cookware`);
      const data = await res.json()
      return data
    }
  })
  if (isLoading) {
    return <ProductsLoader cardCount={8} />
  }
  return (
    <div className='w-10/12 mx-auto my-10 grid grid-cols-4 gap-5'>
      {
        products?.map((product: ProductType) => <ProductCard key={product._id} product={product} />)
      }
    </div>
  )
}

export default Cookware