'use client'
import { FetchProducts } from '@/app/utils/utils';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductsLoader from '../Loader/ProductsLoader';
import ProductCard from '../common/ProductCard';
import { ProductType } from '@/app/types/ProductType';
import { featureSlideSettings } from '@/app/utils/slidesSettings';

const FeaturedProducts = () => {
    const { products, isLoading } = FetchProducts('featured');
    
    if (isLoading) {
        return <ProductsLoader cardCount={4} />
    }
    return (
        <div className='w-10/12 mx-auto my-10 '>
            <h2 className='border-l-4 border-secondary pl-2 text-2xl text-secondary font-semibold mb-5'>Featured Products</h2>
            <Slider {...featureSlideSettings}>
                    {
                        products.map((product:ProductType)=> <ProductCard key={product._id} product={product}/>)
                    }
                </Slider>
            
        </div>
    )
}

export default FeaturedProducts
