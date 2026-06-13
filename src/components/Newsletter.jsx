"use client";

import React, { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setStatus('loading');

  
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="my-20 px-4 max-w-5xl mx-auto">
     
      <div className="bg-gradient-to-br from-indigo-50 to-pink-50 rounded-[35px] p-8 md:p-12 text-center relative overflow-hidden border border-indigo-100/80 shadow-sm">
        
    
        <div className="absolute -top-5 -left-5 text-6xl opacity-10 rotate-12 hidden md:block select-none">✉️</div>
        <div className="absolute -bottom-5 -right-5 text-6xl opacity-10 -rotate-12 hidden md:block select-none">🎁</div>

        <div className="max-w-2xl mx-auto space-y-6 relative z-10">
          <span className="text-3xl md:text-4xl">📢</span>
          
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 tracking-tight">
            হিরো কিডস <span className="text-indigo-600">ক্লাবে যোগ দিন!</span>
          </h2>
          
          <p className="text-slate-600 text-sm md:text-base max-w-md mx-auto leading-relaxed">
            নতুন সব শিক্ষণীয় খেলনার আপডেট, সিক্রেট কুপন কোড এবং ধামাকা অফার সবার আগে আপনার ইমেইলে পেতে এখনই সাবস্ক্রাইব করুন।
          </p>

        
          <form onSubmit={handleSubscribe} className="pt-2">
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto bg-white p-2 rounded-2xl sm:rounded-full shadow-md border border-gray-100">
              <input 
                type="email" 
                placeholder="আপনার ইমেইলটি দিন... 🎯" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-5 py-3 rounded-xl sm:rounded-full text-slate-800 bg-transparent focus:outline-none text-sm"
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 sm:py-2 rounded-xl sm:rounded-full text-sm transition-all duration-200 shadow-md whitespace-nowrap active:scale-95 disabled:bg-gray-400"
              >
                {status === 'loading' ? 'যুক্ত হচ্ছে...' : 'সাবস্ক্রাইব করুন 🚀'}
              </button>
            </div>
          </form>

          
          {status === 'success' && (
            <p className="text-green-600 font-bold text-sm animate-fade-in">
              🎉 অভিনন্দন! আপনি সফলভাবে হিরো কিডস ক্লাবে যুক্ত হয়েছেন।
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;