import React from 'react'

import data_product from '../../public/data'
import new_collections from '../../public/new_collections'
import Item from './Item'
const Home = () => {
    return (
        <>

            {/* NEW ARRIVALS  */}
            <div className='Home  flex min-h-screen bg-[#fed1ff] '>
                <div className="home-left flex flex-1 flex-col justify-center gap-20px pl-180px leading-4">
                    <h2 className='font-semibold text-6xl pl-[180px] p-20 '>NEW ARRIVALS</h2>
                    <div>
                        <div className="hand-icon items-center gap-5 pl-[180px] ">
                            <p className='font-bold text-4xl'>New Collections</p>
                            <p className='font-bold text-4xl'>for Everyone</p>
                        </div>

                    </div>
                    <div className="home-btn flex pl-[180px] ">
                        <div className='bg-[#ff4141] flex justify-center items-center gap-4 w-[310px] h-[70px] rounded-3xl mt-[30px] font-medium text-xl hover:font-bold'>Latest Collection
                            <img src="arrow.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="home-right mx-20">
                    <img src="hero_image.png" alt="" width={484} height={484} />
                </div>
            </div>

            {/* POPULAR  */}

            <div className='popular  flex flex-col items-center gap-3 h-[90vh]'>
                <h1 className='text-5xl font-semibold p-2'>POPULAR IN WOMEN</h1>
                <hr className='w-[200px] h-7 rounded-xl' />

                <div className="popular-item flex mt-12 gap-10 ">
                    {data_product.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>

            {/* OFFERS  */}

            <div className="offer w-7/12 h-[60vh] flex m-auto p-[0px 140px] mb-36 bg-[linear-gradient(180deg,_#fed1ff_0%,_#e1ffea22_60%)] ">
                <div className="offer-left flex flex-1 flex-col justify-center">
                    <h1 className='text-5xl font-semibold'>EXCLUSIVE</h1>
                    <h1 className='text-5xl font-semibold'>OFFERS FOR YOU</h1>
                    <p className='text-xl font-semibold pt-8'>ONLY ON BEST SELLERS PRODUCTS</p>
                    <button className='w-[200px] h-[60px] rounded-full bg-red-600 text-2xl font-medium mt-7'>Chech Now</button>
                </div>
                <div className="offer-right flex flex-1 items-center justify-end pt-12">
                    <img src="exclusive_image.png" alt="" />
                </div>
            </div>

            {/* NEW COLLECTIONS  */}

            <div className='new-collection  flex flex-col items-center gap-3 h-[90vh'>
                <h1 className='text-5xl font-semibold'>NEW COLLECTIONS</h1>
                <hr className='w-[200px] h-1 rounded-xl' />
                <div className="collections grid grid-cols-4 gap-20 mt-12">
                    {new_collections.map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    })}
                </div>
            </div>

            {/* LATEST  */}

            <div className='latest-news my-36 w-[65%] p-8 mb-[150px] flex flex-col items-center justify-center m-auto gap-8 bg-[linear-gradient(180deg,_#fed1ff_0%,_#e1ffea22_100%)] rounded-lg'>
                <h1 className='text-5xl font-bold'>Get Exclusive Offers On Your Email</h1>
                <p className='text-2xl'>Send us your email & stay updated</p>
                <div className='flex items-center justify-between bg-white w-[50vw] h-12 rounded-xl'>
                    <input type="email" placeholder='  Enter Your Email Id' />

                </div>
                <button className='text-white h-10 w-28 bg-black rounded-full hover:bg-slate-900 hover:font-bold '>Submit</button>
            </div>
        </>
    )
}

export default Home