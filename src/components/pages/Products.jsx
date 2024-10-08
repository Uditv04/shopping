import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import BreadCrum from '../BreadCrum'
import {ShopContext} from '../ShopContext'
import ProductDisplay from '../ProductDisplay'
import DescriptionBox from '../DescriptionBox'
import RelatedProducts from '../RelatedProducts'
const Products = () => {
  const {all_product}= useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e)=> e.id=== Number(productId))
  return (
    <div>
      <BreadCrum product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts/>
    </div>
  )
}

export default Products