'use client'
import { featureSlideSettings } from '@/app/utils/slidesSettings';
import { API } from '@/app/config/config';
import { ProductType } from '@/app/types/ProductType';
import { useEffect, useState } from 'react';
import ProductsLoader from '../Loader/ProductsLoader';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ProductCard from '../common/ProductCard';

const FeaturedProducts = () => {
    //Define a products array
    const [products, setProducts] = useState<ProductType[]>()
    //Fetch Products from API
    useEffect(() => {
        const getProduct = async () => {
            const res = await fetch(`${API}/products/featured`);
            const data = await res.json();
            setProducts(data);
        }
        getProduct();
    },
        []);
    if (!products) {
        return <ProductsLoader cardCount={4} />
    }
    return (
        <div className='w-10/12 mx-auto my-10 '>
            <h2 className='border-l-4 border-secondary pl-2 text-2xl text-secondary font-semibold mb-5'>Featured Products</h2>
            <Slider {...featureSlideSettings}>
                {
                    products.map((product: ProductType) => <ProductCard key={product._id} product={product} />)
                }
            </Slider>
        </div>
    )
}

export default FeaturedProducts
