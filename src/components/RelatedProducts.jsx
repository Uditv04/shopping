import React from 'react'
import data_product from '../../public/data'
import Item from './Item'
const RelatedProducts = () => {
  return (
    <div className='related flex flex-col items-center gap-2 h-[90vh]'>
        <h1 className='text-5xl font-bold'>Related Products</h1>
        <hr className='w-52  h-1 rounded-xl bg-[#252525]' />
        <div className="item mt-2 flex gap-24">
{data_product.map((item,i)=>{
return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
})}
        </div>
    </div>
  )
}

export default RelatedProducts