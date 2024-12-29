import React from 'react';

const DescriptionBox = () => {
  return (
    <div className='box my-10 sm:my-20 lg:my-[120px] mx-4 sm:mx-10 lg:mx-[170px] text-white'>
      {/* Navigator Section */}
      <div className="navigator flex flex-wrap items-center justify-center sm:justify-start p-2 gap-5">
        <h1 className="nav-box text-sm sm:text-base font-semibold w-32 sm:w-40 h-12 border border-solid border-[#d0d0d0] text-center p-3">Description</h1>
        <h1 className="fade text-sm sm:text-base font-semibold w-32 sm:w-40 h-12 border border-solid border-[#d0d0d0] text-center p-3">Reviews (500)</h1>
      </div>

      {/* Description Content */}
      <div className="desc flex flex-col gap-4 sm:gap-6 border border-solid border-[#D0D0D0] p-4 sm:p-8 lg:p-12 pb-8 sm:pb-10 lg:pb-16">
        <p className='text-sm sm:text-base lg:text-lg'>
          An E-commerce website is an online platform that facilitates the buying and selling of products and services over the internet. It serves as a virtual marketplace where businesses and individuals showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.
        </p>
        <p className='text-sm sm:text-base lg:text-lg'>
          E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
