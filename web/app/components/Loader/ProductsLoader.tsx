import { FaHeart } from "react-icons/fa";
import imagePlaceholder from '../../../public/assets/image-placeholder.svg'
import Image from 'next/image';

const ProductsLoader = ({cardCount}:{cardCount:number}) => {
    const productCardCount = cardCount;

    return (
        <div className='w-11/12 mx-auto grid grid-cols-4 gap-8 my-14'>
            {
                Array.from({ length: productCardCount }, (_, index) => (
                    <div key={index} className="py-4 rounded shadow-md w-60 sm:w-72 animate-pulse bg-gray-200">
                        <div className="flex p-4 space-x-4 sm:px-8">
                            <div className="flex justify-center items-center w-56 h-36 rounded bg-gray-300">
                                <Image src={imagePlaceholder} alt='Image Placeholder' width={100} height={100} />
                            </div>
                        </div>
                        <div className="px-4 space-y-2">
                            <div className="w-full h-4 rounded bg-gray-300"></div>
                            <div className="w-full h-4 rounded bg-gray-300"></div>
                        </div>
                        <div className="p-4 space-y-2 flex items-end justify-between">
                            <div className="w-8/12 h-8 rounded bg-gray-300"></div>
                            <FaHeart className='w-8 h-8 text-gray-300' />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ProductsLoader;