"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/assets/logo.png'
import { usePathname } from 'next/navigation';
const Navbar = () => {
  const pathname=usePathname()
    return (
      <div className="navbar  text-black p-5 rounded-lg top-0 z-10 bg-gray-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li> <Link href={'/'} classname={pathname==='/'?'text-primary font-bold':''}>Home</Link> </li>
        <li> <Link href={'/product'} classname={pathname==='/product'?'text-primary font-bold':''}>Product</Link> </li>
        <li><Link href={'/contact'} classname={pathname==='/'?'text-primary font-bold':''}>Contact</Link></li>
      </ul>
    </div>
    <div className="m-1 flex gap-2 items-center">    <Image src={logo} alt="Logo" width={68} /> 
     <p className='font-bold text-2xl'>Hero <span className='text-orange-400'>kids</span></p>
     </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 items-center gap-5">
     <li><Link href={'/'} className={pathname==='/'?'text-primary font-bold':''}>Home</Link></li>
        <li> <Link href={'/product'} className={pathname==='/product'?'text-primary font-bold':''}>Product</Link> </li>
        <li><Link href={'/contact'} className={pathname==='/contact'?'text-primary font-bold':''}>Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end "> 
    <span className='btn btn-primary'><Link href={'/login'}>Login </Link> </span>
    
  </div>
</div>
    );
};

export default Navbar;