import React from 'react'
import { Link } from 'react-router-dom'
const Item = (props) => {
  return (
    <>
    <div className="item w-[180px] hover:transform-scale-105 duration-700">
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>  
        <p className='my-1'>{props.name}</p>
        <div className="item-price flex gap-5">
            <div className="new-price font-semibold text-lg ">
                ${props.new_price}
            </div>
            <div className="old-price font-medium line-through text-lg ">
            ${props.old_price}
            </div>
        </div>
    </div>
    </>
  )
}

export default Item