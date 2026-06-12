import Image from 'next/image';
import React from 'react';

async function Getproduct() { 
  const res = await fetch(`http://localhost:3000/api/products`, { cache: 'no-store' });
  return res.json();
}

const Featured = async () => { 
  const products = await Getproduct(); 
  
  return (
    <section className="my-16 px-4 max-w-7xl mx-auto"> 
      
      <div className="text-center space-y-3 mb-12">
        <span className="bg-orange-100 text-orange-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
          আমাদের বিশেষ আকর্ষণ ✨
        </span>
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 mt-5">
          সেরা সব <span className="text-indigo-600">খেলনার কালেকশন</span>
        </h2>
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {products?.slice(0, 6).map((pro) => {
    const discount = pro.discount || pro.percentage || 0;
    const oldPrice =
      discount > 0
        ? Math.round(pro.price / (1 - discount / 100))
        : pro.price;

    return (
      <div
        key={pro._id}
        className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col"
      >
        {/* Image */}
        <div className="relative h-60 overflow-hidden">
          <Image
            src={pro.image}
            alt={pro.title}
            width={500}
            height={500}
            className="w-full h-full object-cover hover:scale-105 transition duration-300"
          />

          {discount > 0 && (
            <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
              -{discount}%
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-1">
          <h2 className="font-bold text-lg line-clamp-2">
            {pro.bangla}
          </h2>

          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {pro.description}
          </p>

          <div className="flex justify-between items-center mt-3 text-sm">
            <span>⭐ {pro.ratings}</span>
            <span>{pro.sold}+ Sold</span>
          </div>

          <div className="mt-3 flex items-center gap-2">
            <span className="text-2xl font-bold text-orange-500">
              ৳{pro.price}
            </span>

            {discount > 0 && (
              <span className="text-gray-400 line-through text-sm">
                ৳{oldPrice}
              </span>
            )}
          </div>

          <div className="mt-auto pt-5 flex gap-2">
            <button className="btn btn-outline btn-primary flex-1">
              View Details
            </button>

            <button className="btn btn-primary flex-1 text-white">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  })}
</div>
    </section>
  );
};

export default Featured;