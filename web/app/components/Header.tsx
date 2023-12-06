'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState,useEffect } from 'react';
import { CiMenuBurger } from "react-icons/ci";
import { FaHeart, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import logo from '../../public/assets/kitchen kraze logo.png';
import { LinkType } from '../types/LinkType';

const Header = () => {
    const navLinks = [
        { title: 'Home', href: '/' },
        { title: 'All Products', href: '/all-products' },
        { title: 'Cookware', href: '/cookware' },
        { title: 'Bakeware', href: '/bakeware' },
        { title: 'Tools & Gadgets', href: '/tools-gadgets' },
        { title: 'Tabletop & Dining', href: '/tabletop-dining' }
    ];
    const [isCollapse, setIsCollapse] = useState<boolean>(false);
    const activePath = usePathname();
    const [prevPathname, setPrevPathname] = useState<string>(activePath);

    // Close the menu if pathname changed...
    useEffect(() => {
        if (prevPathname !== activePath) {
            setPrevPathname(activePath);
            setIsCollapse(false);
        }
    }, [activePath, prevPathname]);
    return (
        <header className='w-full mx-auto bg-gray-100 py-2 text-primary sticky top-0 shadow-md z-50'>
            <div className='w-10/12 mx-auto flex items-center justify-between'>
                <Link href='/'><Image src={logo} alt='Kitchen Kraze Logo' width={180} height={40} /></Link>
                <div>
                    <ul className={`lg:flex items-center gap-6 bg-gray-100 w-full font-semibold absolute lg:static py-3 lg:py-2 px-10 shadow-lg lg:shadow-none duration-500 ease-in-out z-40 text-dealogic ${isCollapse ? 'top-12 right-0' : 'top-[-400px] right-0'}`}>
                        {
                            navLinks.map((link: LinkType) => <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`${activePath === link.href ? 'text-secondary border-t-2 border-secondary' : 'text-primary'} transition-all`}
                                >{link.title}</Link></li>)
                        }
                    </ul>
                </div>
                <div className='flex gap-3'>
                    <Link href='/login'><FaUser className={`${activePath === '/login' && 'text-secondary'} transition-colors`} /></Link>
                    <Link href='/wishlist'><FaHeart className={`${activePath === '/wishlist' && 'text-secondary'} transition-colors`} /></Link>
                    <Link href='/cart'><FaCartShopping className={`${activePath === '/cart' && 'text-secondary'} transition-colors`} /></Link>
                </div>
                <div
                    onClick={() => setIsCollapse(!isCollapse)}
                    className='md:hidden'
                >
                    {isCollapse ? <IoClose className='w-6 h-6 text-black' /> : <CiMenuBurger className='w-6 h-6 text-black' />}
                </div>
            </div>
        </header>
    )
}

export default Header