import Banar from '@/components/Banar';
import Featured from '@/components/Featured';
import React from 'react';

const page = () => {
   return (
        <div className=' bg-gradient-to-r from-[#bcc0c7] to-[#c3cee0]  p-5 rounded-lg '> 
           
       <Banar></Banar>  
      <Featured></Featured>

        </div>
    );
};

export default page;