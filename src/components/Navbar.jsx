"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '../../public/assets/logo.png'
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
const Navbar = () => {
  const pathname=usePathname()
  const {data:session}=useSession() 
 
    return (
      <div className="navbar sticky shadow-md  text-black p-5 rounded-lg top-0 z-[999] bg-gray-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-content rounded-box z-1 mt-3 w-52 p-2 shadow-md">
        <li> <Link href={'/'} className={pathname==='/'?'text-primary font-bold':''}>Home</Link> </li>
        <li> <Link href={'/product'} className={pathname==='/product'?'text-primary font-bold':''}>Product</Link> </li>
        <li><Link href={'/contact'} className={pathname==='/contact'?'text-primary font-bold':''}>Contact</Link></li>
      </ul>
    </div>
    <Link href={'/'} className="m-1 flex gap-2 items-center"  >    <Image src={logo} alt="Logo" width={68} priority /> 
     <p className='font-bold text-2xl'>Hero <span className='text-orange-400'>kids</span></p>
     </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 items-center gap-5">
     <li><Link href={'/'} className={pathname==='/'?'text-primary font-bold':''}>Home</Link></li>
        <li> <Link href={'/product'} className={pathname==='/product'?'text-primary font-bold':''}>Product</Link> </li>
        <li><Link href={'/contact'} className={pathname==='/contact'?'text-primary font-bold':''}>Contact</Link></li>
    </ul>
  </div>
  <div className="navbar-end "> 
   {session ? (
          <>
           <button 
              onClick={() => signOut({ callbackUrl: '/' })} 
              className='btn btn-error btn-outline text-white'
            >
              Logout
            </button>
          </>
        ) : (
          <Link href={'/login'} className='btn btn-primary text-white'>
            Login
          </Link>
        )}
  </div>
</div>
    );
};

export default Navbar;