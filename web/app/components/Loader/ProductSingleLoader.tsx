import Image from 'next/image';
import { FaHeart } from "react-icons/fa";
import imagePlaceholder from '../../../public/assets/image-placeholder.svg';

const ProductSingleLoader = () => {

    return (
        <div className='w-10/12 mx-auto my-10 p-10 flex rounded shadow-md animate-pulse bg-gray-200'>
            <div className='w-6/12'>
                <div className="w-8/12 h-4 rounded bg-gray-300"></div>
                <div className="p-4 space-x-4 sm:px-8">
                    <div className="flex justify-center items-center w-80 h-80 rounded bg-gray-300">
                        <Image src={imagePlaceholder} alt='Image Placeholder' width={200} height={200} />
                    </div>
                </div>
            </div>
            <div className='w-6/12 flex flex-col gap-5'>
                <div className="h-4 rounded bg-gray-300"></div>
                <div className="w-5/12 h-4 rounded bg-gray-300"></div>
                <div className="w-5/12 h-4 rounded bg-gray-300"></div>
                <div className="w-9/12 h-4 rounded bg-gray-300"></div>
                <div className='flex gap-4 items-center'>
                    <div className="w-4/12 h-10 rounded bg-gray-300"></div>
                    <FaHeart className='w-8 h-8 text-gray-300' />
                </div>
                <div className="h-4 rounded bg-gray-300"></div>
                <div className="h-4 rounded bg-gray-300"></div>
                <div className='flex gap-4 items-center'>
                    <div className="w-1/12 h-10 rounded bg-gray-300"></div>
                    <div className="w-1/12 h-10 rounded bg-gray-300"></div>
                    <div className="w-1/12 h-10 rounded bg-gray-300"></div>
                    <div className="w-9/12 h-10 rounded bg-gray-300"></div>
                </div>
                <div className="h-10 rounded bg-gray-300"></div>
            </div>
        </div>
    )
}

export default ProductSingleLoader;