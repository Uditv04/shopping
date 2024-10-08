import React from 'react'

const DescriptionBox = () => {
  return (
    <div className='box my-[120px] mx-[170px]'>
        <div className="navigator flex items-center">
            <h1 className="nav-box text-base font-semibold w-[161px] h-[50px] border border-solid border-[#d0d0d0] text-center p-3">Description</h1>
            <h1 className="fade text-base font-semibold w-[161px] h-[50px] border border-solid border-[#d0d0d0] text-center p-3">Reviews (500)</h1>
        </div>
        <div className="desc flex flex-col gap-6 border border-solid border-[#D0D0D0] p-12 pb-16">
            <p>An E-commerce website is an online platform that facilitates the buying and selling of products and servies over the internet. It serves as a virtual marketplace where businesses and individuals showcase their products,interact with customers and conduct transactions without the need for a physical presence. E-commerce websites have gained immerse popularity due to their convenience, accessibility and the global reach they offer.</p>
            <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices and any available variations (e.g., sizes,colors). Each product usually has its own dedicated page with relevant information.</p>
        </div>
    </div>
  )
}

export default DescriptionBox