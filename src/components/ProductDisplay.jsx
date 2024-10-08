import React from 'react'
const ProductDisplay = (props) => {
    const { product } = props;
    return (
        <>
        <div className='display flex my-0 mx-[70px]'>
            <div className="display-left flex ">
                <div className="img-list flex-col gap-4 m-2">
                    <img className='h-[115px] my-2' src={product.image} alt="" />
                    <img className='h-[115px] my-2' src={product.image} alt="" />
                    <img className='h-[115px] my-2' src={product.image} alt="" />
                    <img className='h-[115px] my-2' src={product.image} alt="" />
                </div>
                <div className="display-img m-2">
                    <img src={product.image} alt="" className="img-main w-[500px] h-[500px]" />
                </div>
            </div>
            <div className="display-right my-0 mx-16 flex flex-col">
                <h1 className='text-4xl font-bold'>{product.name}</h1>
                <div className="right-star flex">
                    <img src="/star_icon.png" alt="" />
                    <img src="/star_icon.png" alt="" />
                    <img src="/star_icon.png" alt="" />
                    <img src="/star_icon.png" alt="" />
                    <img src="/star_dull_icon.png" alt="" />
                    <p>(500)</p>
                </div>
                <div className="right-prices flex my-4 mx-0 gap-5 text-2xl font-bold">
                    <div className="old-price line-through">${product.old_price}</div>
                    <div className="new-price">${product.new_price}</div>
                </div>
                <p>A lightweight, usually knitted, pullover shirt, close fitting and with a rounded neck and short sleeves. </p>
                <div className="size mt-12 text-lg font-semibold">
                    <h1>SELECT SIZE</h1>
                    <ul className='flex my-3 mx-0 gap-5'>
                        <li className='py-3 px-5 bg-[#fbfbfb] border border-solid cursor-pointer'>S</li>
                        <li className='py-3 px-5 bg-[#fbfbfb] border border-solid cursor-pointer'>M</li>
                        <li className='py-3 px-5 bg-[#fbfbfb] border border-solid cursor-pointer'>L</li>
                        <li className='py-3 px-5 bg-[#fbfbfb] border border-solid cursor-pointer'>XL</li>
                        <li className='py-3 px-5 bg-[#fbfbfb] border border-solid cursor-pointer'>XXL</li>
                    </ul>
                </div>
                <button className='py-3 rounded-md w-48 text-base bg-pink-400 mb-10 border-none outline-none transition ease-in-out duration-300 transform hover:scale-105'>ADD TO CART</button>
                <p className='category mt-1'><span className='font-semibold'>Category: </span>Women, T-Shirt, Crop Top</p>
                <p className='categoryy mt-1'><span className='font-semibold'>Tags: </span>Modern, Latest</p>

            </div>
        </div>
        </>
    )
}

export default ProductDisplay