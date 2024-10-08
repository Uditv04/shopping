import React from 'react'

const BreadCrum = (props) => {
    const {product}= props;
  return (
    <div className='breadcrum flex '>
HOME <img src="/breadcrum_arrow.png" alt="" /> SHOP <img src="/breadcrum_arrow.png" alt="" /> {product.category} <img src="/breadcrum_arrow.png" alt="" /> {product.name}
    </div>
  )
}

export default BreadCrum