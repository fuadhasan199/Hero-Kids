import Link from 'next/link';
import React from 'react';
import { GrLinkNext } from 'react-icons/gr';

const Banar = () => {
  return (
<div className="relative w-full h-[60vh] bg-gradient-to-br from-yellow-50 to-orange-100 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-5 md:p-16 my-6 shadow-xl border-4 border-amber-200">
      
     
      <div className="w-full md:w-1/2 z-10 space-y-6 text-center md:text-left">
   
        <h1 className="text-5xl md:text-7xl font-black text-orange-500 tracking-wide drop-shadow-sm font-sans">
          Hero Kids 
        </h1>
        
        
        <p className="text-xl md:text-2xl text-slate-700 font-bold leading-relaxed">
          ছোট্ট হিরোদের জন্য সেরা সব খেলনার মেলা! 🧸
        </p>
        <p className="text-base md:text-lg text-slate-600 font-medium">
          আপনার সন্তানের কল্পনার জগতকে রঙিন করতে আমরা নিয়ে এসেছি নিরাপদ, শিক্ষণীয় এবং দারুণ সব মজার খেলনা। আনন্দের সাথে চলুক ওদের শেখা আর খেলা!
        </p>
        
       
        <div className="pt-2">
          <button  className="btn-primary px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-black rounded-2xl text-xl shadow-lg hover:shadow-orange-300/50 transition-all duration-300 transform hover:-translate-y-1">
           <Link className='flex items-center gap-3 mx-auto' href="/product"> Explore Products <GrLinkNext />  </Link> 
          </button>
        </div>
      </div>

    
      <div 
        className="w-full md:w-1/2 h-72 md:h-[450px] mt-8 md:mt-0 bg-cover bg-center rounded-2xl shadow-inner border-2 border-white/50"
        style={{ 
          backgroundImage: "url('/assets/hero.png')", 
        }}
      >
      
        <div className="w-full h-full bg-transparent rounded-2xl"></div>
      </div>
      
    </div>
  );
};

export default Banar;