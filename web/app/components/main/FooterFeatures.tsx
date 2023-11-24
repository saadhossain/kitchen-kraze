import { BsCartCheckFill } from "react-icons/bs";
import { FaCreditCard } from "react-icons/fa";
import { TbTruckDelivery, TbTruckReturn } from "react-icons/tb";
const FooterFeatures = () => {
    return (
        <div className='w-full bg-gray-100 text-primary'>
            <div className='w-10/12 mx-auto py-12'>
                <div className='grid grid-cols-4 justify-between gap-14'>
                    <div className='flex flex-col gap-5 items-center justify-center text-center cursor-pointer footer-feature'>
                        <BsCartCheckFill className='w-10 h-10 feature-icon' />
                        <p>We made it easy for you to shop from our website or Apps.</p>
                    </div>
                    <div className='flex flex-col gap-5 items-center justify-center text-center cursor-pointer footer-feature'>
                        <TbTruckDelivery className='w-10 h-10 feature-icon' />
                        <p>Orders of $120 or more qualify for free home delivery.</p>
                    </div>
                    <div className='flex flex-col gap-5 items-center justify-center text-center cursor-pointer footer-feature'>
                        <TbTruckReturn className='w-10 h-10 feature-icon' />
                        <p>We allow you to return the purchased items within 14 days</p>
                    </div>
                    <div className='flex flex-col gap-5 items-center justify-center text-center cursor-pointer footer-feature'>
                        <FaCreditCard className='w-10 h-10 feature-icon' />
                        <p>Ease mind when paying through online banking or Stripe</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterFeatures