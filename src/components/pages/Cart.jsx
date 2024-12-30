import React, { useContext } from 'react';
import { ShopContext } from '../ShopContext';

const Cart = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

  return (
    <div className="bg-[radial-gradient(circle_farthest-side,rgba(12,0,128,0.8),#000000)] min-h-screen flex flex-col text-white">
      {/* Ensure this covers the full height */}
      <div className="item py-16 px-6 md:px-12 lg:px-40 w-full">
        <div className="format hidden sm:grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center gap-4 lg:gap-8 py-4 px-0 font-semibold text-base lg:text-lg">
          <p>Product</p>
          <p className="mx-4 md:mx-10 lg:mx-20">Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr className="h-1 border-0 bg-[#e2e2e2]" />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="format grid grid-cols-[1fr_2fr_1fr_1fr_1fr_1fr] items-center gap-4 lg:gap-8 py-4 px-0 font-semibold text-sm md:text-base lg:text-lg">
                  <img src={e.image} alt="" className="icon w-12 h-12 md:w-16 md:h-16" />
                  <p>{e.name}</p>
                  <p className="m-2">${e.new_price}</p>
                  <button className="quantity border w-8 h-8 m-2">{cartItems[e.id]}</button>
                  <p className="m-2">${e.new_price * cartItems[e.id]}</p>
                  <span className="m-2" onClick={() => removeFromCart(e.id)}>
                    <lord-icon
                      src="https://cdn.lordicon.com/skkahier.json"
                      trigger="hover"
                      colors="primary:#ffffff"
                      style={{ width: '30px', height: '30px' }}
                    ></lord-icon>
                  </span>
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cart-down flex flex-col md:flex-row my-16 mx-0 gap-10">
          <div className="total flex flex-1 flex-col gap-6 px-4 md:px-0">
            <h1 className="font-bold text-lg">Total</h1>
            <div>
              <div className="total-item flex justify-between py-2 md:py-4">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="total-item flex justify-between py-2 md:py-4">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="total-item flex justify-between py-2 md:py-4">
                <h3 className="font-semibold">Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button className="outline-none border-none h-12 w-full md:w-64 text-sm md:text-base font-semibold bg-transparent border border-transparent shadow-[0_0_10px_rgba(12,118,228,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md transition ease-in-out duration-300 transform hover:scale-105">
              PROCEED TO CHECKOUT
            </button>
          </div>
          <div className="promo flex-1 flex flex-col gap-4 text-sm md:text-base font-medium px-4 md:px-0 ">
            <p>If you have a promo code, enter it here</p>
            <div className="promobox flex w-full max-w-xs md:max-w-md lg:max-w-lg p-2">
              <input
                className="flex-1 p-3 text-sm rounded-lg bg-transparent border border-transparent shadow-[0_0_10px_rgba(12,100,228,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Promo code"
              />
              <button className="w-24 h-12 md:w-32 md:h-12 text-sm md:text-base bg-transparent border border-transparent shadow-[0_0_10px_rgba(12,100,228,0.7)] focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
