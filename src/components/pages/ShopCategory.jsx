import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext'
import Item from '../Item'


const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext)
  return (
    <div className='category'>
      <img className='category-banner block m-7 mx-auto w-[82%]' src={props.banner} alt="" />
      <div className="index-sort flex my-6 mx-10 justify-between items-center">
        <p className='font-bold'>
          <span className='font-bold'>Showing 1-12</span> out of 36 products
        </p>
        <div className="sort  rounded-full border border-solid border-[#888] mr-[200px]  ">
         <p className='flex items-center justify-between px-1 py-2 '> Sort by <img className='mx-2' src="dropdown_icon.png" alt="" /></p>
        </div>
      </div>
      <div className="category-products my-5 mx-40 grid grid-cols-4 gap-y-20 ">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else {
            return null;
          }
        })}
      </div>
      <div className="loadmore flex justify-center items-center px-1 py-2 m-10 mx-[700px] border border-solid transition ease-in-out duration-300 transform hover:scale-125 rounded-full bg-pink-400">
        <p>Explore More</p>
      </div>
    </div>
  )
}

export default ShopCategory