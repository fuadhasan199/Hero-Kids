// components/SpecialOffer.jsx
import React from 'react';

const SpecialOffer = () => {
  return (
    <section className="my-24 px-4 max-w-7xl mx-auto">
     
      <div className="relative bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-[40px] p-8 md:p-16 overflow-hidden shadow-2xl border-4 border-amber-300/30">
        
        
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-300/20 rounded-full -mr-24 -mt-24 blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-400/20 rounded-full -ml-16 -mb-16 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          
         
          <div className="text-center lg:text-left space-y-6 lg:max-w-2xl">
            
            <span className="inline-block bg-yellow-400 text-red-900 px-6 py-2 rounded-full font-black text-sm uppercase tracking-wider shadow-md animate-pulse">
              সীমিত সময়ের ধামাকা অফার! 🔥
            </span>
            
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-md">
              প্রিয় সব খেলনায় পান <br />
              <span className="text-yellow-300 underline decoration-wavy decoration-white/40">৫০% পর্যন্ত ফ্ল্যাট ছাড়!</span>
            </h2>
            
            <p className="text-orange-50 text-base md:text-xl font-medium max-w-lg mx-auto lg:mx-0 leading-relaxed">
              আপনার সোনামণির বুদ্ধিবৃত্তিক ও মানসিক বিকাশে সহায়ক সেরা সব খেলনা এখন পাচ্ছেন অবিশ্বাস্য মূল্যে। স্টক ফুরিয়ে যাওয়ার আগেই লুফে নিন!
            </p>

           
            <div className="pt-4">
              <button className="bg-white text-red-500 hover:bg-yellow-400 hover:text-red-950 transition-all duration-300 px-10 py-4 rounded-2xl font-black text-xl shadow-xl transform hover:-translate-y-1 active:translate-y-0">
                অফারটি লুফে নিন 🛍️
              </button>
            </div>
          </div>

        
          <div className="w-full lg:w-auto flex flex-col items-center">
            <div className="bg-white/15 backdrop-blur-md border border-white/20 p-8 rounded-[35px] text-center w-full max-w-sm shadow-inner">
              <h3 className="text-white font-bold mb-6 text-sm md:text-base tracking-widest uppercase">
                ⏳ অফারটি শেষ হবে:
              </h3>
              
          
              <div className="flex justify-center gap-4">
              
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-2xl flex items-center justify-center text-red-600 font-black text-2xl md:text-3xl shadow-lg">
                    ১৫
                  </div>
                  <span className="text-white text-xs font-black mt-2 tracking-wide">তারিখ</span>
                </div>
               
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-2xl flex items-center justify-center text-red-600 font-black text-2xl md:text-2xl shadow-lg">
                    ০৮ টা
                  </div>
                  <span className="text-white text-xs font-black mt-2 tracking-wide">সকাল </span>
                </div>
               
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-2xl flex items-center justify-center text-red-600 font-black text-2xl md:text-3xl shadow-lg">
                    ০০
                  </div>
                  <span className="text-white text-xs font-black mt-2 tracking-wide">মিনিট</span>
                </div>
              </div>

             
              <div className="mt-8 bg-gradient-to-r from-yellow-400 to-amber-400 text-red-950 py-3 px-8 rounded-2xl font-black text-sm md:text-base border-2 border-dashed border-red-500/30 inline-block shadow-md">
                কুপন কোড: <span className="tracking-wider bg-white/50 px-2 py-0.5 rounded-lg ml-1">HERO50</span>
              </div>
            </div>
          </div>

        </div>

       
        <div className="absolute top-10 right-1/2 text-4xl opacity-15 animate-bounce hidden md:block select-none">🧸</div>
        <div className="absolute bottom-10 left-1/3 text-4xl opacity-15 animate-pulse hidden md:block select-none">🎨</div>
        <div className="absolute top-1/3 left-12 text-4xl opacity-15 animate-spin hidden md:block select-none">🚀</div>
        <div className="absolute bottom-12 right-12 text-4xl opacity-20 hidden md:block select-none">✨</div>

      </div>
    </section>
  );
};

export default SpecialOffer;