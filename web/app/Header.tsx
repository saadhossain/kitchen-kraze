'use client'
import Image from 'next/image';
import Link from 'next/link';
import { FaHeart, FaUser } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import logo from '../public/assets/kitchen kraze logo.png';
import { usePathname } from 'next/navigation';


interface linkType {
    title: string,
    href: string
}

const Header = () => {
    const navLinks = [
        { title: 'Home', href: '/' },
        { title: 'All Products', href: '/all-products' },
        { title: 'Cookware', href: '/cookware' },
        { title: 'Bakeware', href: '/bakeware' },
        { title: 'Tools & Gadgets', href: '/tools-gadgets' },
        { title: 'Tabletop & Dining', href: '/tabletop-dining' }
    ];
    const activePath = usePathname();
    return (
        <header className='w-full mx-auto bg-white py-2 text-primary'>
            <div className='w-10/12 mx-auto flex items-center justify-between '>
                <Link href='/'><Image src={logo} alt='Kitchen Kraze Logo' width={180} height={40} /></Link>
                <div>
                    <ul className='flex gap-5'>
                        {
                            navLinks.map((link: linkType) => <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className={`${activePath === link.href ? 'text-secondary border-t-2 border-secondary':'text-primary'} transition-all`}
                                >{link.title}</Link></li>)
                        }
                    </ul>
                </div>
                <div className='flex gap-3'>
                    <Link href='/login'><FaUser className={`${activePath === '/login' && 'text-secondary'} transition-colors`}/></Link>
                    <Link href='/wishlist'><FaHeart className={`${activePath === '/wishlist' && 'text-secondary'} transition-colors`}/></Link>
                    <Link href='/cart'><FaCartShopping className={`${activePath === '/cart' && 'text-secondary'} transition-colors`}/></Link>
                </div>
            </div>
        </header>
    )
}

export default Header