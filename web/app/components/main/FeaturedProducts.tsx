'use client'
import { ProductType } from '@/app/types/ProductType';
import ProductCard from '../common/ProductCard';
import { useQuery } from '@tanstack/react-query';
import { API } from '@/app/config/config';
import ProductsLoader from '../Loader/ProductsLoader';

const FeaturedProducts =  () => {
    const { data: products = [], isLoading } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`${API}/products/featured`);
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
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