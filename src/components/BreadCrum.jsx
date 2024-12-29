import React from 'react';

const BreadCrum = (props) => {
  const { product } = props;

  return (
    <div className="breadcrum flex flex-wrap items-center gap-1 md:gap-2 p-2 text-sm md:text-base lg:text-lg text-white">
      <span>HOME</span>
      <img src="/breadcrum_arrow.png" alt="arrow" className="w-3 h-3 md:w-4 md:h-4" />
      <span>SHOP</span>
      <img src="/breadcrum_arrow.png" alt="arrow" className="w-3 h-3 md:w-4 md:h-4" />
      <span>{product.category}</span>
      <img src="/breadcrum_arrow.png" alt="arrow" className="w-3 h-3 md:w-4 md:h-4" />
      <span>{product.name}</span>
    </div>
  );
};

export default BreadCrum;
