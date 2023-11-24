import React from 'react'
import { IoIosSend } from "react-icons/io";

const FooterSubscribe = () => {
  return (
    <div className='w-full bg-primary text-white py-14'>
        <div className='w-10/12 mx-auto flex justify-between items-center gap-14'>
            <div className='w-2/4'>
                <h3 className='text-xl font-semibold mb-5'>Join our Email List & Get $15 Off.</h3>
                <p className='text-sm'>Get our emails for info on new items, sales, and more. Receive $15 off your next order of $150 or more.</p>
            </div>
            <div className='w-2/4'>
                <form className='flex'>
                    <input type="text" name="" className='w-9/12 focus:outline-none text-primary py-2 px-2'/>
                    <button className='w-3/12 bg-secondary py-2 px-5 flex items-center gap-2'><IoIosSend/> Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default FooterSubscribe