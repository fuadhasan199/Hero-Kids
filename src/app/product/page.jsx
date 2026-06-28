"use client"
import ProductSkeletion from '@/components/skeletion/ProductSkeletion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';


const Product = () => { 
  
  
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("")
  const [isLoading,setIsLoading]=useState(true)

  
  useEffect(() => {
    const GetProducts = async () => {
      try { 
        setIsLoading(true)
        const res = await fetch(`http://localhost:3000/api/products?search=${search}&sort=${sort}`, { cache: "no-cache" }); 
        const data = await res.json()
        setProducts(data)
      } catch (error) {
        console.error("Error fetching products:", error);
      }
      finally{
        setIsLoading(false)
      }
    }
    GetProducts()
  }, [search, sort]); 

  

  return (
    <div className='bg-gradient-to-r from-[#bcc0c7] to-[#c3cee0] p-5'> 
     

    
      <div className="text-center space-y-2 mb-4 py-7 rounded-[40px]">
      
        <span className="inline-flex items-center gap-1.5 bg-purple-100 text-purple-700 px-5 py-2 rounded-full text-xs md:text-sm font-black tracking-wide shadow-sm">
          🧸 হিরো কিডস স্পেশাল
        </span>
        
       
        <h1 className="text-3xl md:text-5xl font-black text-slate-850 leading-tight">
          চলো যাই <span className="text-sky-500 drop-shadow-sm">খেলনার রাজ্যে!</span> 🚀
        </h1>
        
      
        <p className="text-slate-500 text-sm md:text-base font-bold max-w-xl mx-auto leading-relaxed">
          খাঁটি আনন্দ আর নতুন কিছু শেখার জাদুকরী বাক্স এখন এক ছাদের নিচে।
        </p>
      </div> 

      <div className="flex justify-between items-center">
        {/* search bar */}
        <label className="input bg-base-content ml-7 flex items-center gap-2">
          <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"     
              stroke="currentColor" 
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
        
          <input 
            type="search" 
            required 
            placeholder="Search Here..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </label> 

        {/* sorting btn */} 
        <div className="dropdown dropdown-hover">
          <div tabIndex={0} role="button" className="btn m-2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 mr-[80px]">
           
            {sort === "low-to-high" ? "Price: Low to High" : sort === "high-to-low" ? "Price: High to Low" : "Sort"}
          </div> 
          
         

          <ul tabIndex="-1" className="dropdown-content menu bg-base-content rounded-box z-1 w-52 p-5 shadow-sm text-slate-800">
           
            <li><a onClick={() => setSort("")}>default</a></li>
            <li><a onClick={() => setSort("low-to-high")}>price low to high</a></li>
            <li><a onClick={() => setSort("high-to-low")}>price high to low</a></li>
          </ul>
        </div>
      </div> 

      <p className='mt-12 font-bold text-2xl ml-5'>Total Products: {products?.length || 0}</p>

      {/* product cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {isLoading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <ProductSkeletion key={index} />
          ))
        ) : (
          products?.map((pro) => {
          const discount = pro.discount || pro.percentage || 0;
          const oldPrice = discount > 0 ? Math.round(pro.price / (1 - discount / 100)) : pro.price;

          return (
            <div
              key={pro._id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col m-2 mt-8"
            >
              <div className="relative h-55 overflow-hidden">
                <Image
                  src={pro.image}
                  loading="lazy"
                  alt={pro.title}
                  width={450}
                  height={450}
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
                  <Link href={`/product/${pro._id}`} className="btn btn-outline btn-primary flex-1">
                    View Details
                  </Link>

                  <button className="btn btn-primary flex-1 text-white">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })
        )}
      </div> 

    </div>
  );
};

export default Product;