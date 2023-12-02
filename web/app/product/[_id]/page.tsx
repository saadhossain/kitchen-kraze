'use client'
import ProductSingleLoader from '@/app/components/Loader/ProductSingleLoader';
import { API } from '@/app/config/config';
import { ProductType } from '@/app/types/ProductType';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FaCheckCircle, FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

const SingleProduct = ({ params }: { params: { _id: string } }) => {
  const productId = params._id;
  const [loading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductType | undefined>();
  const [featureImg, setFeatureImg] = useState<any>();

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const res = await fetch(`${API}/products/${productId}`);
      const data = await res.json();
      setProduct(data[0]);
      setFeatureImg(data[0]?.images[0]);
      setLoading(false);
    }
    getProducts();
  },
    [productId]);

  if (loading) {
    return <ProductSingleLoader />
  }
  return (
    <div className='w-10/12 mx-auto my-10 flex gap-12'>
      {
        product && (
          <>
            <div className="w-6/12 rounded bg-gray-100 flex justify-between relative">
              {/* Thumbnails */}
              <div>
                {
                  product.images.map((image: string, index: number) => <Image
                    onClick={() => setFeatureImg(image)}
                    key={index}
                    src={image} alt='Thumbnail' width={112} height={40}
                    className='border-2 border-gray-200 m-2 rounded-md cursor-pointer w-28' />)
                }
              </div>
              <p className='px-2 bg-red-600 text-white rounded absolute top-2 right-2'>{Math.ceil(((product.regularPrice - product.salePrice) / product.regularPrice) * 100)}% OFF</p>
              <Image src={featureImg} alt='Feature Image' width={400} height={200} className='rounded-r-md' />
            </div>
            <div className='w-6/12 flex flex-col gap-5'>
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <div><p className='font-semibold'>Categories:</p>{product.categories.map((cat: string) => <span key={cat}>{cat}, </span>)}</div>
              {/* Ratings and Stock */}
              <div className='flex gap-3 text-sm'>
                <div className='flex gap-1 items-center'>
                  <FaStar className='text-secondary' />
                  <p>4.8 ({product.reviews.length} Ratings)</p>
                </div>
                <div className='flex gap-1 items-center text-green-600'>
                  <FaCheckCircle />
                  <p>Stock ({product.inStock})</p>
                </div>
              </div>
              <div className='flex gap-4 items-center'>
                <button className="flex items-center gap-2 px-6 py-2 rounded-md bg-secondary text-white font-semibold hover:bg-accent transition-colors"><FaShoppingCart /> Buy Now</button>
                <FaHeart className='w-8 h-8 text-pink-400' />
              </div>
              <p><span className='font-semibold'>Short Description:</span><br />{product.shortDescription}</p>
            </div>
          </>
        )
      }
    </div>
  )
}

export default SingleProduct