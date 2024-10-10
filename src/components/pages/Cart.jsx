import React, { useContext } from 'react'
import { ShopContext } from '../ShopContext'

const Cart = () => {
  const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext)
  return (
    <div className='item my-24 mx-40'>
      <div className="format grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-20 py-4 px-0 font-semibold text-lg">
        <p>Product</p>
        <p className='mx-20'>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className='h-1 border-0 bg-[#e2e2e2]'/>
     {all_product.map((e)=>{
      if (cartItems[e.id]>0){
        return  <div>
        <div className="format grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-20 py-5 px-0 font-semibold text-lg">
          <img src={e.image} alt="" className='icon' />
          <p>{e.name}</p>
          <p className='m-2'>${e.new_price}</p>
          <button className='quantity border w-8 m-6'>{cartItems[e.id]}</button>
          <p className='m-2'>${e.new_price*cartItems[e.id]}</p>
          <span className='m-6' onClick={()=>{removeFromCart(e.id)}}>
          <lord-icon
            src="https://cdn.lordicon.com/skkahier.json"
            trigger="hover"
            style={{ "width": "25px", "height": "25px" }}>
          </lord-icon>
          </span>
        </div>
        <hr />
      </div>
      }
      return null;
     })}
     <div className="cart-down flex my-24 mx-0">
<div className="total flex flex-1 flex-col mr-48 gap-10">
  <h1 className='font-bold'>Total</h1>
  <div>
    <div className="total-item flex justify-between py-4 px-0">
      <p>Subtotal</p>
      <p>${getTotalCartAmount()}</p>
    </div>
    <hr />
    <div className="total-item flex justify-between py-4 px-0">
      <p>Shipping Fee</p>
      <p>Free</p>
    </div>
    <hr />
    <div className="total-item flex justify-between py-4 px-0">
      <h3 className='font-semibold'>Total</h3>
      <h3>${getTotalCartAmount()}</h3>
    </div>
  </div>
  <button className='outline-none border-none h-14 w-64 text-base font-semibold bg-pink-500 rounded-md transition ease-in-out duration-300 transform hover:scale-105' >PROCEED TO CHECKOUT</button>
</div>
<div className="promo flex-1 text-base font-medium">
  <p>If you have a promo code, Enter it here</p>
  <div className="promobox w-[504px] mt-4 pl-5 h-14 bg-[#eaeaea]">
    <input className='border-none outline-none bg-transparent text-base w-80 h-12' type="text" placeholder='Promocode'/>
    <button className='w-40 h-14 text-base bg-pink-500 transition ease-in-out duration-300 transform hover:scale-105'>Submit</button>
  </div>
</div>
     </div>
    </div>
  )
}

export default Cart