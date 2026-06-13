import Banar from '@/components/Banar';
import CustomerReview from '@/components/CustomerReview';
import Featured from '@/components/Featured';
import Newsletter from '@/components/Newsletter';
import SpecialOffer from '@/components/SpecialOffer';
import WhyChoose from '@/components/WhyChoose';
import React from 'react';

const page = () => {
   return (
        <div className=' bg-gradient-to-r from-[#bcc0c7] to-[#c3cee0]  p-5 rounded-lg '> 
           
       <Banar></Banar>  
      <Featured></Featured> 
       <SpecialOffer></SpecialOffer>
       <Newsletter></Newsletter>
      <WhyChoose></WhyChoose>
      <CustomerReview></CustomerReview>
     

        </div>
    );
};

export default page;