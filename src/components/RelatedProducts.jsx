import React from 'react';
import data_product from '../../public/data';
import Item from './Item';

const RelatedProducts = () => {
  return (
    <div className='related flex flex-col items-center gap-4 py-8'>
      {/* Title Section */}
      <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold'>Related Products</h1>
      <hr className='w-24 sm:w-32 lg:w-52 h-1 rounded-xl bg-[#252525]' />

      {/* Products Grid */}
      <div className="item mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12 px-4 sm:px-8 lg:px-16">
        {data_product.map((item, i) => (
          <Item 
            key={i} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
