import React from 'react';

const WhyChoose = () => {

const features = [
    {
      id: 1,
      icon: "🛡️",
      title: "১০০% নিরাপদ ও অবিষাক্ত",
      description: "আমাদের প্রতিটি খেলনা নন-টক্সিক (Non-toxic) এবং সম্পূর্ণ শিশু-নিরাপদ উপাদান দিয়ে তৈরি। ধারালো কোণ বা ক্ষতিকারক কেমিক্যালমুক্ত।"
    },
    {
      id: 2,
      icon: "🧠",
      title: "বুদ্ধি ও মেধা বিকাশ",
      description: "আমরা শুধু আনন্দের জন্য নয়, বরং বাচ্চাদের লজিক্যাল থিংকিং, মনোযোগ এবং সৃজনশীলতা বৃদ্ধি করার মতো শিক্ষামূলক খেলনা সরবরাহ করি।"
    },
    {
      id: 3,
      icon: "🚚",
      title: "সারা বাংলাদেশে ক্যাশ অন ডেলিভারি",
      description: "কোনো অগ্রিম পেমেন্টের ঝামেলা নেই! অর্ডার করুন, ঘরে বসেই খেলনা হাতে বুঝে পেয়ে তারপর মূল্য পরিশোধ করুন।"
    },
    {
      id: 4,
      icon: "🔄",
      title: "সহজ রিটার্ন ও পরিবর্তন",
      description: "খেলনায় কোনো সমস্যা থাকলে বা পছন্দ না হলে ৩ দিনের মধ্যে খুব সহজেই পরিবর্তন বা রিটার্ন করার সুব্যবস্থা রয়েছে।"
    }
  ];

    return (
        <div> 

<section className="my-20 bg-gradient-to-b from-indigo-50/50 to-orange-50/30 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
       
        <div className="text-center space-y-3 mb-16">
          <span className="bg-indigo-100 text-indigo-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
            কেন আমরাই সেরা? 🤔
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-slate-800 pt-2">
            কেন বাবা-মায়ের প্রথম পছন্দ <span className="text-orange-500">Hero Kids</span>?
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto text-sm md:text-base">
            আপনার সন্তানের মুখের অমূল্য হাসি আর সঠিক মানসিক বিকাশ নিশ্চিত করতেই আমাদের এই পথচলা।
          </p>
        </div>

       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item) => (
            <div 
              key={item.id}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center group"
            >
             
              <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                <span className="group-hover:animate-bounce">{item.icon}</span>
              </div>

        
              <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-indigo-600 transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>


            
        </div>
    );
};

export default WhyChoose;