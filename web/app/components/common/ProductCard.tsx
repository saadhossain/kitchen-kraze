import { ProductType } from '@/app/types/ProductType';
import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle, FaStar } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }: { product: ProductType }) => {
    const discountPercent = Math.ceil(((product.regularPrice - product.salePrice) / product.regularPrice) * 100);
    return (
        <div className='rounded-md bg-gray-100 hover:shadow-md transition-shadow'>
            {/* Product Image */}
            <Link href={`/product/${product._id}`} className='relative'>
                <p className='px-2 bg-red-600 text-white rounded absolute top-2 right-2'>{discountPercent}% OFF</p>
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={160}
                    className='rounded-t-md w-72 h-40'
                />
            </Link>
            <div className='p-4 rounded-b flex flex-col gap-3 justify-between h-48'>
                {/* Ratings and Stock */}
                <div className='flex justify-between text-sm'>
                    <div className='flex gap-1 items-center'>
                        <FaStar className='text-secondary' />
                        <p>4.8 ({product.reviews.length} Ratings)</p>
                    </div>
                    <div className='flex gap-1 items-center text-green-600'>
                        <FaCheckCircle />
                        <p>Stock ({product.inStock})</p>
                    </div>
                </div>
                {/* Product details */}
                <h2 className='font-semibold'><Link href={`/product/${product._id}`}>{product.name}</Link></h2>
                <div>

                </div>
                <div className='flex justify-between items-center'>
                    <div className='flex gap-2 items-center'>
                        <s className='text-red-600'>${product.regularPrice}</s>
                        <p className='text-xl font-semibold'>${product.salePrice}</p>
                    </div>
                    <button className='flex gap-2 items-center bg-secondary py-2 px-4 rounded-md text-white hover:bg-accent transition-colors'><FaShoppingCart/> Buy</button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard