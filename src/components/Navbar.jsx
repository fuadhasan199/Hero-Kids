import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
      <div className="navbar  text-black p-5 rounded-lg top-0 z-10 bg-gray-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li> Item 2
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 items-center gap-5">
     <li><a>Item 1</a></li>
        <li> Item 2
        </li>
        <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <Link href={'/login'}>Login </Link>
  </div>
</div>
    );
};

export default Navbar;