import React from 'react';



export  const metadata={
         title:"All Products",
         description:"Browse our amazing collection of toys and educational products for kids."
    }
const layout = ({children}) => { 
  
    return (
        <div>
           {children}
        </div>
    );
};

export default layout;