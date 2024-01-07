import { LinkType } from '@/app/types/LinkType'
import Link from 'next/link'
import React from 'react';
import { FaFacebookSquare, FaInstagramSquare ,FaTiktok, FaAddressCard, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const FooterQuickLinks = () => {
    const customerLinks = [
        {title:'My Account', href:'/account'},
        {title:'My Orders', href:'/account/orders'},
        {title:'Delivery Policy', href:'/customerservice/#delivery'},
        {title:'Returns Policy', href:'/customerservice/#returns'},
        {title:'Warranty Policy', href:'/customerservice/#warranty'},
        {title:'Contact Us', href:'/customerservice/#contact'}
    ];
    const companyLinks = [
        {title:'About Us', href:'/about'},
        {title:'Careers', href:'/careers'},
        {title:'Terms of Service', href:'/termsofservice'},
        {title:'Privacy Policy', href:'/privacypolicy'},
    ]
    const businessLinks = [
        {title:'Affiliate Program', href:'/affiliate'},
        {title:'Refer A Friend', href:'/refer'},
        {title:'Sell with Us', href:'/sell-with-us'},
        {title:'Promotions', href:'/promotions'},
    ]
  return (
    <div className='w-full bg-[#FBFBFB] py-14'>
        <div className='w-10/12 mx-auto grid md:grid-cols-4 grid-cols-2 gap-10 justify-between'>
            <div>
                <h3 className='md:text-xl text-md font-semibold'>Customer Center</h3>
                <ul className='mt-5 flex flex-col gap-3'>
                    {
                        customerLinks.map((link:LinkType)=> <li key={link.href} className='text-sm'><Link href={link.href}>{link.title}</Link></li>)
                    }
                </ul>
            </div>
            <div>
                <h3 className='md:text-xl text-md font-semibold'>About the Company</h3>
                <ul className='mt-5 flex flex-col gap-3'>
                    {
                        companyLinks.map((link:LinkType)=> <li key={link.href} className='text-sm'><Link href={link.href}>{link.title}</Link></li>)
                    }
                </ul>
                <div className='flex gap-3 mt-3'>
                    <Link href='/'><FaFacebookSquare className='w-6 h-6'/></Link>
                    <Link href='/'><FaInstagramSquare className='w-6 h-6'/></Link>
                    <Link href='/'><FaTiktok className='w-6 h-6'/></Link>
                </div>
            </div>
            <div className='flex flex-col gap-5 text-sm'>
                <h3 className='md:text-xl text-md font-semibold'>Where we are?</h3>
                <span className='flex gap-2 items-center'><FaAddressCard /> The Kitchen Kraze Limited.(BIN-248737622)</span>
                <span className='flex gap-2 items-center'><MdLocationOn/> 23/25 Sparkle Tower, Mirpur DOHS, Dhaka, BD-1216.</span>
                <span className='flex gap-2 items-center'><FaPhoneAlt /> +880 186 - 5533874</span>
                <span className='flex gap-2 items-center'><FaEnvelope /> support@kitchenkraze.com</span>
            </div>
            {/* Footer Business Column */}
            <div className='flex flex-col gap-5 text-sm'>
            <h3 className='md:text-xl text-md font-semibold'>Business</h3>
            <ul className='mt-5 flex flex-col gap-3'>
                    {
                        businessLinks.map((link:LinkType)=> <li key={link.href} className='text-sm'><Link href={link.href}>{link.title}</Link></li>)
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterQuickLinks