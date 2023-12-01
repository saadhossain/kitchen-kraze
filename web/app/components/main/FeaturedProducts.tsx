'use client'
import { API } from '@/app/config/config';
import { ProductType } from '@/app/types/ProductType';
import { useEffect, useState } from 'react';
import ProductsLoader from '../Loader/ProductsLoader';
import ProductCard from '../common/ProductCard';

const FeaturedProducts = () => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState<[] | null>();
    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const res = await fetch(`${API}/products/featured`);
            const data = await res.json();
            setProducts(data);
            setLoading(false);
        }
        getProducts();
    },
        []);
    if (loading) {
        return <ProductsLoader cardCount={8} />
    }
    return (
        <div className='w-10/12 mx-auto my-10 '>
            <h2 className='border-l-4 border-secondary pl-2 text-2xl text-secondary font-semibold mb-5'>Featured Products</h2>
            <div className='grid grid-cols-4 gap-5'>
                {
                    products?.map((product: ProductType) => <ProductCard key={product._id} product={product} />)
                }
            </div>
        </div>
    )
}

export default FeaturedProducts