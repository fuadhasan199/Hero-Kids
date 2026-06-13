"use client"
import React from 'react';

const loading = () => {
    return (
        <div className="min-h-[80vh] w-full flex gap-2 items-center justify-center bg-white">
            

<span className="loading loading-spinner loading-xl"></span>
<span className="loading loading-spinner loading-xl"></span>

        </div>
    );
};

export default loading;