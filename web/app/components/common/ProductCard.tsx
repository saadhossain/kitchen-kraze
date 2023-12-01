import { ProductType } from '@/app/types/ProductType'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = ({ product }: { product: ProductType }) => {
    return (
        <div className='rounded bg-gray-100'>
            <Link href={`/product/${product._id}`}>
                <Image
                    src={product.images[0]}
                    alt={product.name}
                    width={300}
                    height={160}
                    className='rounded-t w-72 h-40'
                />
            </Link>
            <div className='p-4 rounded-b'>
                <h2 className='font-semibold'><Link href={`/product/${product._id}`}>{product.name}</Link></h2>
            </div>
        </div>
    )
}

export default ProductCard