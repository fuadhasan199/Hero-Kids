import React from 'react';

const ProductSkeletion = () => {
   return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md flex flex-col m-2 mt-8 animate-pulse p-4 space-y-4">
      {/* Image Skeleton */}
      <div className="h-55 bg-slate-200 rounded-xl w-full"></div>
      
      {/* Content Skeleton */}
      <div className="flex-1 space-y-3">
        {/* Title */}
        <div className="h-5 bg-slate-200 rounded w-5/6"></div>
        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 bg-slate-200 rounded"></div>
          <div className="h-3 bg-slate-200 rounded w-4/5"></div>
        </div>
        {/* Rating & Sold */}
        <div className="flex justify-between items-center pt-2">
          <div className="h-4 bg-slate-200 rounded w-12"></div>
          <div className="h-4 bg-slate-200 rounded w-16"></div>
        </div>
        {/* Price */}
        <div className="h-7 bg-slate-200 rounded w-24 pt-2"></div>
        {/* Buttons */}
        <div className="flex gap-2 pt-3">
          <div className="h-10 bg-slate-200 rounded flex-1"></div>
          <div className="h-10 bg-slate-200 rounded flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeletion;