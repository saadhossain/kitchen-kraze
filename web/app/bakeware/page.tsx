import ProductsLoader from '../components/Loader/ProductsLoader';
import ProductCard from '../components/common/ProductCard';
import { AppName } from '../config/config';
import { metadata } from '../layout';
import { ProductType } from '../types/ProductType';
import { fetchProducts } from '../utils/utils';

const Bakeware = async() => {
  metadata.title= `Bakeware | ${AppName}`;
  metadata.description = `Bakeware | Find Everything you need for Bakeware.`

  //Fetch Products from API
  const products = await fetchProducts('category?categoryName=Bakeware')
  if (!products) {
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

export default Bakeware