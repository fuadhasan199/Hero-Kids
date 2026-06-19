"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

 // আপনার useEffect-এর ভেতরের অংশটুকু এভাবে পরিবর্তন করুন:
useEffect(() => {
  const fetchSingleProduct = async () => {
    try {
      setLoading(true);
      // Relative path ব্যবহার করায় এটি লোকাল ও লাইভ উভয় সার্ভারেই কাজ করবে
      const res = await fetch(`/api/products/${id}`);
      
      if (!res.ok) {
        setProduct({ error: true });
        return;
      }

      const data = await res.json();
      setProduct(data);
    } catch (error) {
      console.error("Error fetching single product:", error);
      setProduct({ error: true }); 
    } finally {
      setLoading(false);
    }
  };

  if (id) fetchSingleProduct();
}, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-3">
        <span className="loading loading-spinner loading-lg text-primary"></span>
        <p className="text-slate-500 font-bold animate-pulse">খেলনার জাদুকরী বাক্সটি খোলা হচ্ছে... 🧸</p>
      </div>
    );
  }

  if (!product || product.error) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-5 p-4 text-center">
        <div className="text-6xl">😢</div>
        <h2 className="text-2xl font-black text-slate-800">দুঃখিত ভাই, খেলনাটি খুঁজে পাওয়া যায়নি!</h2>
        <Link href="/product" className="btn btn-primary rounded-xl text-white font-bold shadow-md">
          ← খেলনার রাজ্যে ফিরে যাও
        </Link>
      </div>
    );
  }

  // ডিসকাউন্ট এবং পুরনো প্রাইস ক্যালকুলেশন
  const discount = product.discount || 0;
  const oldPrice = discount > 0 ? Math.round(product.price / (1 - discount / 100)) : product.price;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-[32px] shadow-xl overflow-hidden border border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 sm:p-10">
          
          {/* 📸 বাম পাশ: প্রিমিয়াম ইমেজ সেকশন */}
         {/* 📸 বাম পাশ: প্রিমিয়াম ইমেজ সেকশন */}
<div className="space-y-4">
  <div className="relative h-[350px] sm:h-[450px] w-full rounded-2xl overflow-hidden bg-slate-50 border border-slate-100 group">
    <Image 
      // 🌟 এখানে চেক করা হচ্ছে: ইমেজ যদি ডাটাবেজে খালি বা missing থাকে, তবে একটা ডিফল্ট কিউট প্লেসহোল্ডার ছবি দেখাবে
      src={product.image && product.image.trim() !== "" ? product.image : "https://images.unsplash.com/photo-1532330384785-f558023194cd?q=80&w=600"} 
      alt={product.title || "Hero Kids Toy"} 
      fill
      priority
      className="object-contain p-4 group-hover:scale-105 transition duration-500"
    />
    {discount > 0 && (
      <span className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs px-4 py-1.5 rounded-full font-black tracking-wide shadow-md uppercase animate-bounce">
        -{discount}% ছাড়! 🎉
      </span>
    )}
  </div>
</div>

          {/* 📝 ডান পাশ: আকর্ষণীয় প্রোডাক্ট ইনফো */}
          <div className="flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* ব্যাজ */}
              <div className="flex flex-wrap gap-2 items-center">
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-black tracking-wide shadow-sm">
                  🧸 হিরো কিডস প্রিমিয়াম
                </span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-black tracking-wide shadow-sm">
                  ✓ ইন স্টক
                </span>
              </div>

              {/* নামসমূহ */}
              <div>
                <h1 className="text-2xl sm:text-3xl font-black text-slate-800 leading-tight">
                  {product.bangla}
                </h1>
                <p className="text-sm text-slate-400 font-bold mt-1 tracking-wide">
                  {product.title}
                </p>
              </div>

              {/* রেটিং এবং সেলস কাউন্ট */}
              <div className="flex items-center gap-4 bg-slate-50 p-3 rounded-xl border border-slate-100 w-fit">
                <div className="flex items-center gap-1 text-orange-500 font-black">
                  ⭐ <span className="text-slate-800">{product.ratings || "4.5"}</span>
                </div>
                <div className="w-px h-4 bg-slate-300" />
                <p className="text-xs text-slate-500 font-bold">
                  🔥 <span className="text-slate-800 font-extrabold">{product.sold || "50"}+</span> সফলভাবে বিক্রি হয়েছে
                </p>
              </div>

              {/* প্রাইজ কার্ড */}
              <div className="bg-gradient-to-r from-orange-500/10 to-red-500/5 p-4 rounded-2xl border border-orange-500/10 flex items-center gap-4">
                <div>
                  <p className="text-xs text-slate-500 font-bold mb-0.5">আজকের অফার মূল্য:</p>
                  <span className="text-3xl sm:text-4xl font-black text-orange-500 drop-shadow-sm">
                    ৳{product.price}
                  </span>
                </div>
                {discount > 0 && (
                  <div className="mt-4">
                    <span className="text-slate-400 line-through text-base font-bold">
                      ৳{oldPrice}
                    </span>
                  </div>
                )}
              </div>

              {/* ডেসক্রিপশন */}
              <div className="space-y-1">
                <h3 className="font-black text-slate-700 text-sm">খেলনার বিবরণ:</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {product.description || "এই শিক্ষামূলক খেলনাটি শিশুদের মেধা বিকাশ এবং আনন্দের সাথে নতুন কিছু শেখার জন্য চমৎকার একটি মাধ্যম।"}
                </p>
              </div>
            </div>

            {/* 🛒 অ্যাকশন বাটন সেকশন */}
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="btn btn-primary flex-1 text-white font-black rounded-xl text-base shadow-lg shadow-blue-500/20 active:scale-95 transition">
                  এখনই কিনুন 🚀
                </button>
                <button className="btn btn-outline btn-primary flex-1 font-black rounded-xl text-base active:scale-95 transition">
                  কার্টে রাখুন 🛒
                </button>
              </div>
              <p className="text-center text-[11px] text-slate-400 font-bold">
                🔒 ১০০% নিরাপদ পেমেন্ট এবং দ্রুত হোম ডেলিভারি সুবিধা
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;