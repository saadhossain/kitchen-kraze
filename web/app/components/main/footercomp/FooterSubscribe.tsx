import React from 'react'
import { IoIosSend } from "react-icons/io";

const FooterSubscribe = () => {
  return (
    <div className='w-full bg-primary text-white py-14'>
        <div className='w-10/12 mx-auto flex md:flex-row flex-col justify-between items-center md:gap-14 gap-8'>
            <div className='md:w-2/4 w-full'>
                <h3 className='text-xl font-semibold mb-5'>Join our Email List & Get $15 Off.</h3>
                <p className='text-sm md:mb-0 mb-3'>Get our emails for info on new items, sales, and more. Receive $15 off your next order of $150 or more.</p>
            </div>
            <div className='md:w-2/4 w-full'>
                <form className='flex'>
                    <input type="text" name="" className='w-8/12 focus:outline-none text-primary py-2 px-2'/>
                    <button className='w-4/12 bg-secondary flex gap-2 items-center md:px-5 md:py-2 px-2'><IoIosSend/> Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FooterSubscribe