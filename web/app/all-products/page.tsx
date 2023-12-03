'use client'
import ProductsLoader from '../components/Loader/ProductsLoader';
import ProductCard from '../components/common/ProductCard';
import { ProductType } from '../types/ProductType';
import { FetchProducts } from '../utils/utils';

const AllProducts = () => {
  // metadata.title = `All Products | ${AppName}`;
  // metadata.description = `All Products | Choose your item among all our products.`;

  //Fetch Products from API
  const { products, isLoading } = FetchProducts('')
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

export default AllProducts