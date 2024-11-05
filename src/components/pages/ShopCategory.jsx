import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext';
import Item from '../Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  
  return (
    <div className='category'>
      {/* Banner Image */}
      <img 
        className='category-banner block my-7 mx-auto w-full sm:w-[90%] md:w-[82%]' 
        src={props.banner} 
        alt="" 
      />

      {/* Product Count and Sort Options */}
      <div className="index-sort flex flex-col sm:flex-row my-6 mx-4 sm:mx-10 justify-between items-center">
        <p className='font-bold'>
          <span className='font-bold'>Showing 1-12</span> out of 36 products
        </p>
        <div className="sort rounded-full border border-solid border-[#888] mt-3 sm:mt-0 sm:mr-[100px] md:mr-[200px]">
          <p className='flex items-center justify-between px-3 py-2'>
            Sort by
            <img className='mx-2' src="dropdown_icon.png" alt="Dropdown icon" />
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="category-products my-5 mx-4 sm:mx-10 md:mx-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-y-20">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item 
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
                old_price={item.old_price} 
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      {/* Load More Button */}
      <button className="loadmore flex justify-center items-center px-5 py-3 m-6 mx-auto w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 border border-solid transition ease-in-out duration-300 transform hover:scale-105 rounded-full bg-pink-400">
  Explore More
</button>

      
    </div>
  );
}

export default ShopCategory;
