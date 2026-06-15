"use client";

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('loading');

    
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section className="bg-gradient-to-r from-[#bcc0c7] to-[#c3cee0]  p-5 rounded-lg">
      
    
      <div className="text-center space-y-3 mb-16 bg-gradient-to-b from-purple-50/60 to-transparent py-12 rounded-[40px]">
        <span className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-xs md:text-sm font-black tracking-wide shadow-sm">
          👋 হ্যালো বন্ধুগন!
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-800 leading-tight">
          হিরো কিডসের <span className="text-purple-600">যোগাযোগ কেন্দ্র</span> 🌟
        </h1>
        <p className="text-slate-500 text-sm md:text-base font-bold max-w-md mx-auto leading-relaxed">
          যেকোনো প্রশ্ন, খেলনা নিয়ে জিজ্ঞাসা বা স্পেশাল অর্ডারের জন্য আমাদের মেসেজ দিন। আমরা খুব দ্রুত উত্তর দেব!
        </p>
      </div>

 
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
      
        <div className="lg:col-span-5 space-y-6">
          
        
          <div className="bg-slate-50/60 border border-slate-100 p-6 rounded-[28px] flex items-start gap-4 transition-all duration-300 hover:bg-slate-50">
            <span className="text-3xl bg-white p-3 rounded-2xl shadow-sm">📍</span>
            <div className="space-y-1">
              <h3 className="font-black text-slate-800 text-lg">আমাদের ঠিকানা</h3>
              <p className="text-slate-500 text-sm font-medium leading-relaxed">
                 মিস্ত্রিপাড়া,শালবন, রংপুর সদর,<br />রংপুর, বাংলাদেশ।
              </p>
            </div>
          </div> 
         
    
          <div className="bg-slate-50/60 border border-slate-100 p-6 rounded-[28px] flex items-start gap-4 transition-all duration-300 hover:bg-slate-50">
            <span className="text-3xl bg-white p-3 rounded-2xl shadow-sm">📞</span>
            <div className="space-y-1">
              <h3 className="font-black text-slate-800 text-lg">সরাসরি কথা বলুন</h3>
              <p className="text-slate-500 text-sm font-bold">হেল্পলাইন: +৮৮০ ১৭০০-০০০০০০</p>
              <p className="text-slate-400 text-xs font-medium">ইমেইল: support@herokids.com</p>
            </div>
          </div>

        
          <div className="bg-slate-50/60 border border-slate-100 p-6 rounded-[28px] flex items-start gap-4 transition-all duration-300 hover:bg-slate-50">
            <span className="text-3xl bg-white p-3 rounded-2xl shadow-sm">⏰</span>
            <div className="space-y-1">
              <h3 className="font-black text-slate-800 text-lg">সাপোর্ট টাইম</h3>
              <p className="text-slate-500 text-sm font-medium">শনিবার - বৃহস্পতিবার (সকাল ১০:০০ - রাত ৯:০০)</p>
              <p className="text-xs font-bold text-green-500 bg-green-50 px-2 py-0.5 rounded-md inline-block mt-1">শুক্রবার বন্ধ 🎈</p>
            </div>
          </div>

        </div>

        <div className="lg:col-span-7 bg-white border border-slate-100/80 rounded-[35px] p-6 md:p-10 shadow-xl shadow-slate-100/50 relative overflow-hidden">
          
          <div className="absolute -top-6 -right-6 text-7xl opacity-5 rotate-12 select-none">✉️</div>
          
          <h2 className="text-xl md:text-2xl font-black text-slate-800 mb-6 flex items-center gap-2">
          আমাদের ড্রপবক্সে আপনার মেসেজ পাঠান
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">
            
          
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-600 pl-1">আপনার নাম</label>
                <input 
                  type="text" 
                  placeholder="আপনার নাম লিখুন..." 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 focus:bg-white rounded-2xl text-slate-800 border border-transparent focus:border-purple-300 focus:outline-none text-sm transition-all font-medium"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-black text-slate-600 pl-1">ইমেইল আইডি</label>
                <input 
                  type="email" 
                  placeholder="email@example.com" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="w-full px-5 py-3.5 bg-slate-50 focus:bg-white rounded-2xl text-slate-800 border border-transparent focus:border-purple-300 focus:outline-none text-sm transition-all font-medium"
                />
              </div>
            </div>

      
            <div className="space-y-1.5">
              <label className="text-xs font-black text-slate-600 pl-1">মেসেজের বিষয় (Subject)</label>
              <input 
                type="text" 
                placeholder="কোন বিষয়ে জানতে চান..." 
                value={formData.subject}
                onChange={(e) => setFormData({...formData, subject: e.target.value})}
                required
                className="w-full px-5 py-3.5 bg-slate-50 focus:bg-white rounded-2xl text-slate-800 border border-transparent focus:border-purple-300 focus:outline-none text-sm transition-all font-medium"
              />
            </div>

         
            <div className="space-y-1.5">
              <label className="text-xs font-black text-slate-600 pl-1">আপনার মেসেজ</label>
              <textarea 
                rows="4" 
                placeholder="আপনার মেসেজ টা এখানে লিখুন... " 
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                required
                className="w-full px-5 py-4 bg-slate-50 focus:bg-white rounded-2xl text-slate-800 border border-transparent focus:border-purple-300 focus:outline-none text-sm transition-all font-medium resize-none"
              ></textarea>
            </div>

         
            <button 
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-black py-4 rounded-2xl text-sm transition-all duration-300 shadow-md active:scale-[0.99] disabled:opacity-50"
            >
              {status === 'loading' ? 'মেসেজটি যাচ্ছে...' : 'মেসেজ পাঠান ✨'}
            </button>

          
            {status === 'success' && (
              <div className="p-4 bg-green-50 border border-green-100 rounded-2xl text-center text-green-600 text-sm font-bold animate-fade-in mt-3">
                🎉 ধন্যবাদ! আপনার মেসেজটি সফলভাবে আমাদের ড্রপবক্সে পৌঁছেছে।
              </div>
            )}

          </form>

        </div>

      </div>

    </section>
  );
};

export default ContactPage;