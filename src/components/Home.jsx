import React from 'react';
import data_product from '../../public/data';
import new_collections from '../../public/new_collections';
import Item from './Item';

const Home = () => {
    return (
        <>
            {/* NEW ARRIVALS */}
            <div className='Home flex flex-col lg:flex-row min-h-screen bg-[#fed1ff] p-4 lg:p-0'>
                <div className="home-left flex flex-1 flex-col justify-center gap-5 lg:gap-10 lg:pl-20 leading-4">
                    <h2 className='font-semibold text-4xl lg:text-6xl pl-0 lg:pl-20 py-5'>NEW ARRIVALS</h2>
                    <div className="hand-icon items-center gap-3 lg:gap-5 lg:pl-20">
                        <p className='font-bold text-2xl lg:text-4xl'>New Collections</p>
                        <p className='font-bold text-2xl lg:text-4xl'>for Everyone</p>
                    </div>
                    <div className="home-btn flex lg:pl-20">
                    <div className='bg-[#ff4141] flex justify-center items-center gap-2 lg:gap-4 w-[150px] sm:w-[180px] lg:w-[310px] h-[40px] sm:h-[50px] lg:h-[70px] rounded-3xl mt-[10px] sm:mt-[20px] font-medium text-base sm:text-lg lg:text-xl hover:font-bold'>
    Latest Collection
    <img src="arrow.png" alt="" className='w-4 sm:w-5 lg:w-6' />
</div>
                    </div>
                </div>
                <div className="home-right mx-0 lg:mx-20 flex justify-center">
    <img src="hero_image.png" alt="Hero" className='w-40 sm:w-60 lg:w-[484px] h-auto' />
</div>
            </div>

            {/* POPULAR */}
            <div className='popular flex flex-col items-center gap-3 h-auto lg:h-[90vh] py-10'>
                <h1 className='text-3xl lg:text-5xl font-semibold p-2'>POPULAR IN WOMEN</h1>
                <hr className='w-[100px] lg:w-[200px] h-2 lg:h-7 rounded-xl' />
                <div className="popular-item grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-10 mt-8">
                    {data_product.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>

            {/* OFFERS */}
            <div className="offer flex flex-col lg:flex-row w-full lg:w-7/12 h-auto lg:h-[60vh] m-auto p-5 lg:p-0 mb-24 lg:mb-36 bg-[linear-gradient(180deg,_#fed1ff_0%,_#e1ffea22_60%)]">
                <div className="offer-left flex flex-1 flex-col justify-center items-center lg:items-start">
                    <h1 className='text-3xl lg:text-5xl font-semibold'>EXCLUSIVE</h1>
                    <h1 className='text-3xl lg:text-5xl font-semibold'>OFFERS FOR YOU</h1>
                    <p className='text-lg lg:text-xl font-semibold pt-4 lg:pt-8 text-center lg:text-left'>ONLY ON BEST SELLERS PRODUCTS</p>
                    <button className='w-[150px] lg:w-[200px] h-[50px] lg:h-[60px] rounded-full bg-red-600 text-lg lg:text-2xl font-medium mt-4 lg:mt-7'>Check Now</button>
                </div>
                <div className="offer-right flex flex-1 items-center justify-center lg:justify-end pt-8 lg:pt-12">
                    <img src="exclusive_image.png" alt="" className='w-48 lg:w-auto' />
                </div>
            </div>

            {/* NEW COLLECTIONS */}
            <div className='new-collection flex flex-col items-center gap-3 py-10 lg:h-[90vh]'>
                <h1 className='text-3xl lg:text-5xl font-semibold'>NEW COLLECTIONS</h1>
                <hr className='w-[100px] lg:w-[200px] h-2 lg:h-1 rounded-xl' />
                <div className="collections grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-20 mt-8 lg:mt-12">
                    {new_collections.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>

            {/* LATEST NEWS */}
            <div className='latest-news my-36 lg:my-80 w-[65%] p-8 mb-[150px] flex flex-col items-center justify-center m-auto gap-8 bg-[linear-gradient(180deg,_#fed1ff_0%,_#e1ffea22_100%)] rounded-lg'>
                <h1 className='text-3xl lg:text-5xl font-bold text-center'>Get Exclusive Offers On Your Email</h1>
                <p className='text-xl lg:text-2xl text-center'>Send us your email & stay updated</p>
                <div className='flex flex-col lg:flex-row items-center justify-between bg-white w-full lg:w-[50vw] h-12 rounded-xl'>
                    <input type="email" className='flex-1 border-none outline-none p-2 text-sm lg:text-base' placeholder='Enter Your Email Id' />
                </div>
                <button className='text-white h-10 w-24 lg:w-28 bg-black rounded-full hover:bg-slate-900 hover:font-bold'>Submit</button>
            </div>
        </>
    )
}

export default Home;
