import ProductsLoader from '../components/Loader/ProductsLoader';
import ProductCard from '../components/common/ProductCard';
import { AppName } from '../config/config';
import { metadata } from '../layout';
import { ProductType } from '../types/ProductType';
import { fetchProducts } from '../utils/utils';

const TabletopAndDining = async() => {
  metadata.title= `Tabletop & Dining | ${AppName}`;
  metadata.description = `Tabletop & Dining | Find Everything you need for Tabletop & Dining.`;

  //Fetch Products from API
  const products = await fetchProducts('category?categoryName=Tabletop_Dining')
  if (!products) {
    return <ProductsLoader cardCount={8} />
  }
  return (
    <div className='w-11/12 md:w-10/12 mx-auto my-10 grid md:grid-cols-4 grid-cols-2 md:gap-5 gap-2'>
      {
        products?.map((product: ProductType) => <ProductCard key={product._id} product={product} />)
      }
    </div>
  )
}

export default TabletopAndDining