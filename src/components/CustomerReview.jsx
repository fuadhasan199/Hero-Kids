"use client"
import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';




import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Swiper, SwiperSlide } from 'swiper/react';
const CustomerReview = () => {
    return (
 <Swiper
  modules={[Autoplay, Pagination]}
  slidesPerView={1}
  spaceBetween={30}
  loop={true}
  speed={800}
  autoplay={{
    delay: 1500,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
>
  {/* Review 1 */}
  <SwiperSlide>
    <div className="bg-white p-8 rounded-2xl shadow-lg h-72 flex flex-col justify-between">
      <div>
        <h2 className="text-2xl font-bold text-indigo-600">
          🎉 Premium Toy Collection
        </h2>
        <p className="mt-4 text-gray-600">
          "আমার ছেলের জন্য কিনেছিলাম। খেলনার কোয়ালিটি অসাধারণ এবং খুবই নিরাপদ।"
        </p>
      </div>

      <div className="border-t pt-4">
        <h3 className="font-bold">রাহেলা আক্তার</h3>
        <p className="text-sm text-gray-500">আয়ানের আম্মু ⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  </SwiperSlide>

  {/* Review 2 */}
  <SwiperSlide>
    <div className="bg-gradient-to-r from-orange-400 to-pink-500 p-8 rounded-2xl text-white h-72 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold">🚚 Fast Delivery</h2>
        <p className="mt-4">
          "অর্ডার করার পরদিনই হাতে পেয়েছি। সার্ভিস সত্যিই দারুণ।"
        </p>
      </div>

      <div className="border-t border-white/30 pt-4">
        <h3 className="font-bold">আরিফুর রহমান</h3>
        <p className="text-sm">চাকুরীজীবী ⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  </SwiperSlide>

  {/* Review 3 */}
  <SwiperSlide>
    <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-8 rounded-2xl text-white h-72 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold">⭐ Trusted by Parents</h2>
        <p className="mt-4">
          "বাচ্চাদের শেখার জন্য দারুণ খেলনা। আমার মেয়ে প্রতিদিন এগুলো নিয়ে খেলে।"
        </p>
      </div>

      <div className="border-t border-white/30 pt-4">
        <h3 className="font-bold">ফারহানা ইয়াসমিন</h3>
        <p className="text-sm">গৃহিণী ⭐⭐⭐⭐☆</p>
      </div>
    </div>
  </SwiperSlide>

  {/* Review 4 */}
  <SwiperSlide>
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-8 rounded-2xl text-white h-72 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold">🎁 Special Offers</h2>
        <p className="mt-4">
          "দাম অনুযায়ী কোয়ালিটি অনেক ভালো। আবারও অর্ডার করবো।"
        </p>
      </div>

      <div className="border-t border-white/30 pt-4">
        <h3 className="font-bold">তানভীর আহমেদ</h3>
        <p className="text-sm">ব্যবসায়ী ⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  </SwiperSlide>

  {/* Review 5 */}
  <SwiperSlide>
    <div className="bg-gradient-to-r from-purple-500 to-fuchsia-600 p-8 rounded-2xl text-white h-72 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold">🧩 Learning Toys</h2>
        <p className="mt-4">
          "পাজল সেটটি আমার মেয়ের চিন্তাশক্তি বাড়াতে অনেক সাহায্য করছে।"
        </p>
      </div>

      <div className="border-t border-white/30 pt-4">
        <h3 className="font-bold">সাবরিনা ইসলাম</h3>
        <p className="text-sm">মা ⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  </SwiperSlide>

  {/* Review 6 */}
  <SwiperSlide>
    <div className="bg-gradient-to-r from-red-500 to-rose-600 p-8 rounded-2xl text-white h-72 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold">🎈 Happy Kids</h2>
        <p className="mt-4">
          "জন্মদিনে গিফট দিয়েছিলাম। বাচ্চারা খুব আনন্দ নিয়ে খেলছে।"
        </p>
      </div>

      <div className="border-t border-white/30 pt-4">
        <h3 className="font-bold">মাহমুদ হাসান</h3>
        <p className="text-sm">অভিভাবক ⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  </SwiperSlide>

  {/* Review 7 */}
  <SwiperSlide>
    <div className="bg-gradient-to-r from-teal-500 to-cyan-600 p-8 rounded-2xl text-white h-72 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold">🚀 Excellent Service</h2>
        <p className="mt-4">
          "কাস্টমার সাপোর্ট খুব ভালো ছিল। যেকোনো প্রশ্নের দ্রুত উত্তর পেয়েছি।"
        </p>
      </div>

      <div className="border-t border-white/30 pt-4">
        <h3 className="font-bold">নাঈম হোসেন</h3>
        <p className="text-sm">বাবা ⭐⭐⭐⭐☆</p>
      </div>
    </div>
  </SwiperSlide>

  {/* Review 8 */}
  <SwiperSlide>
    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-8 rounded-2xl text-black h-72 flex flex-col justify-between">
      <div>
        <h2 className="text-3xl font-bold">💖 Best Choice</h2>
        <p className="mt-4">
          "আমার দুই সন্তানই খেলনাগুলো খুব পছন্দ করেছে। কোয়ালিটি সত্যিই প্রিমিয়াম।"
        </p>
      </div>

      <div className="border-t border-black/20 pt-4">
        <h3 className="font-bold">জান্নাতুল ফেরদৌস</h3>
        <p className="text-sm">গৃহিণী ⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  </SwiperSlide>
</Swiper>
  );
};

export default CustomerReview;