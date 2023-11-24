import { BsCartCheckFill } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
const FooterFeatures = () => {
    return (
        <div className='w-10/12 mx-auto py-12'>
            <div className='grid grid-cols-4 justify-between gap-14'>
                <div className='flex flex-col gap-5 items-center justify-center text-center'>
                    <BsCartCheckFill className='w-10 h-10' />
                    <p>We made it easy for you to shop from our website or Apps.</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center text-center'>
                    <TbTruckDelivery className='w-10 h-10' />
                    <p>Orders of $120 or more qualify for free home delivery.</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center text-center'>
                    <TbTruckReturn className='w-10 h-10' />
                    <p>We allow you to return the purchased items within 14 days</p>
                </div>
                <div className='flex flex-col gap-5 items-center justify-center text-center'>
                    <FaCreditCard className='w-10 h-10' />
                    <p>Ease mind when paying through online banking or Stripe</p>
                </div>
            </div>
        </div>
    )
}

export default FooterFeatures