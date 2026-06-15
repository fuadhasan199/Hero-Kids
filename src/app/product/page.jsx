import React from 'react';

const page = () => {
    return (
        <div className=' bg-gradient-to-r from-[#bcc0c7] to-[#c3cee0]  p-5'>

  {/* heading text */}
<div className="text-center space-y-2 mb-4  py-7 rounded-[40px]">
  
  {/* ১. ছোট কিউট ব্যাজ */}
  <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-xs md:text-sm font-black tracking-wide shadow-sm">
    🧸 হিরো কিডস স্পেশাল
  </span>
  
  {/* ২. প্রধান শিরোনাম (কালার কম্বিনেশন সহ) */}
  <h1 className="text-3xl md:text-5xl font-black text-slate-850 leading-tight">
    চলো যাই <span className="text-sky-500 drop-shadow-sm">খেলনার রাজ্যে!</span> 🚀
  </h1>
  
  {/* ৩. ছোট সাব-টাইটেল */}
  <p className="text-slate-500 text-sm md:text-base font-bold max-w-xl mx-auto leading-relaxed">
    খাঁটি আনন্দ আর নতুন কিছু শেখার জাদুকরী বাক্স এখন এক ছাদের নিচে।
  </p>

</div> 

 
<div className="flex justify-between items-center">
{/* search bar */}
    <label className="input bg-base-content ml-7">
  <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <g
      strokeLinejoin="round"
      strokeLinecap="round"
      strokeWidth="2.5"
      fill="nonde"
      stroke="currentColo"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <path d="m21 21-4.3-4.3"></path>
    </g>
  </svg>
  <input type="search" required placeholder="Search Here..." />
</label> 


{/* filter btn */} 



<div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className="btn m-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">Sort</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-content rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a>default</a></li>
    <li><a>price low to high</a></li>
       <li><a>price high to low</a></li>
  </ul>
</div>


</div> 


<p className='mt-12 font-bold text-2xl ml-5'>Total Products:</p>






 </div>
         

    );
};

export default page;