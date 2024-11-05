import React, { useContext } from 'react';
import { ShopContext } from './ShopContext';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <div className='display flex flex-col lg:flex-row my-0 mx-4 lg:mx-[70px]'>
            {/* Left Display (Images) */}
            <div className="display-left flex flex-col lg:flex-row items-center">
                <div className="img-list flex lg:flex-col gap-4 m-2">
                    <img className='h-[80px] sm:h-[100px] lg:h-[115px] my-2' src={product.image} alt="" />
                    <img className='h-[80px] sm:h-[100px] lg:h-[115px] my-2' src={product.image} alt="" />
                    <img className='h-[80px] sm:h-[100px] lg:h-[115px] my-2' src={product.image} alt="" />
                    <img className='h-[80px] sm:h-[100px] lg:h-[115px] my-2' src={product.image} alt="" />
                </div>
                <div className="display-img m-2">
                    <img src={product.image} alt="" className="img-main w-full sm:w-[300px] lg:w-[500px] h-auto" />
                </div>
            </div>

            {/* Right Display (Product Details) */}
            <div className="display-right my-6 lg:my-0 lg:mx-16 flex flex-col">
                <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold'>{product.name}</h1>
                
                <div className="right-star flex my-2">
                    <img src="/star_icon.png" alt="star icon" className="w-4 sm:w-5 lg:w-6" />
                    <img src="/star_icon.png" alt="star icon" className="w-4 sm:w-5 lg:w-6" />
                    <img src="/star_icon.png" alt="star icon" className="w-4 sm:w-5 lg:w-6" />
                    <img src="/star_icon.png" alt="star icon" className="w-4 sm:w-5 lg:w-6" />
                    <img src="/star_dull_icon.png" alt="star icon" className="w-4 sm:w-5 lg:w-6" />
                    <p className="ml-2 text-sm sm:text-base">(500)</p>
                </div>

                <div className="right-prices flex my-4 gap-3 sm:gap-5 text-lg sm:text-2xl font-bold">
                    <div className="old-price line-through">${product.old_price}</div>
                    <div className="new-price">${product.new_price}</div>
                </div>

                <p className="text-sm sm:text-base">A lightweight, usually knitted, pullover shirt, close fitting and with a rounded neck and short sleeves.</p>
                
                {/* Size Selection */}
                <div className="size mt-8 text-base lg:text-lg font-semibold">
                    <h1>SELECT SIZE</h1>
                    <ul className='flex flex-wrap gap-3 my-3'>
                        {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                            <li 
                                key={size}
                                className='py-2 px-4 bg-[#fbfbfb] border cursor-pointer rounded-md text-sm sm:text-base hover:bg-gray-200 transition ease-in-out duration-150'
                            >
                                {size}
                            </li>
                        ))}
                    </ul>
                </div>

                <button 
                    className='py-3 mt-5 rounded-md w-full sm:w-48 text-base bg-pink-400 mb-4 sm:mb-10 border-none outline-none transition ease-in-out duration-300 transform hover:scale-105'
                    onClick={() => { addToCart(product.id) }}
                >
                    ADD TO CART
                </button>
                
                <p className='category mt-2 text-sm'><span className='font-semibold'>Category:</span> Women, T-Shirt, Crop Top</p>
                <p className='categoryy mt-1 text-sm'><span className='font-semibold'>Tags:</span> Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
