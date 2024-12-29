import React from 'react';
import data_product from '../../public/data';
import new_collections from '../../public/new_collections';
import Item from './Item';

const Home = () => {
  return (
    <>
     <div className="bg-[radial-gradient(125%_125%_at_50%_10%,#000_50%,#63e_80%)]">
  {/* NEW ARRIVALS */}
  <div className="flex flex-col lg:flex-row min-h-screen p-4 lg:p-0 text-white max-w-screen-2xl mx-auto mb-12">
    <div className="flex flex-1 flex-col justify-center gap-5 lg:gap-10 lg:pl-20">
      <h2 className="font-semibold text-4xl lg:text-6xl">NEW ARRIVALS</h2>
      <p className="font-bold text-2xl lg:text-4xl">New Collections for Everyone</p>
      <button className="bg-transparent border border-transparent shadow-[0_0_10px_rgba(128,118,228,0.7)] focus:outline-none focus:ring-2 focus:ring-purple-500 flex justify-center items-center gap-2 lg:gap-4 w-[150px] sm:w-[180px] lg:w-[310px] h-[40px] sm:h-[50px] lg:h-[80px] rounded-2xl mt-[10px] sm:mt-[20px] font-medium xl:text-2xl sm:text-sm lg:text-lg transition ease-in-out duration-300 transform hover:scale-105 text-white px-6 py-3">
        Latest Collection
      </button>
    </div>
    <div className="flex justify-center mt-6 lg:mt-0">
      <img src="imgg.jpg" alt="product" className="w-40 sm:w-60 lg:w-[484px] h-auto rounded-3xl" />
    </div>
  </div>

  {/* POPULAR */}
  <div className="text-white text-center max-w-screen-2xl mx-auto mb-12">
    <h1 className="text-3xl lg:text-5xl font-semibold mb-6">POPULAR IN WOMEN</h1>
    <div className="grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
      {data_product.map((item, i) => (
        <Item
          key={i}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      ))}
    </div>
  </div>

    {/* OFFERS */}
    <div className="offer flex flex-col lg:flex-row w-full lg:w-9/12 h-auto lg:h-[60vh] mx-auto p-5 lg:p-0 mb-16 lg:mb-24 text-white max-w-screen-2xl">
          <div className="offer-left flex flex-1 flex-col justify-center items-center lg:items-start">
            <h1 className="text-3xl lg:text-5xl font-semibold">EXCLUSIVE</h1>
            <h1 className="text-3xl lg:text-5xl font-semibold">OFFERS FOR YOU</h1>
            <p className="text-lg lg:text-xl font-semibold pt-4 lg:pt-8 text-center lg:text-left">
              ONLY ON BEST SELLERS PRODUCTS
            </p>
            <button className="w-[150px] h-[50px] rounded-full bg-transparent border border-transparent shadow-[0_0_10px_rgba(128,118,228,0.7)] focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg lg:text-xl font-medium mt-4 lg:mt-7 transition ease-in-out duration-300 transform hover:scale-105">
              Check Now
            </button>
          </div>
          <div className="offer-right flex flex-1 items-center justify-center lg:justify-end pt-8 lg:pt-12">
            <img src="exclusive_image.png" alt="exclusive offers" className="w-48 lg:w-auto" />
          </div>
        </div>

  {/* NEW COLLECTIONS */}
  <div className="text-white text-center max-w-screen-2xl mx-auto mb-12 pt-5">
    <h1 className="text-3xl lg:text-5xl font-semibold mb-6">NEW COLLECTIONS</h1>
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
      {new_collections.map((item, i) => (
        <Item
          key={i}
          id={item.id}
          name={item.name}
          image={item.image}
          new_price={item.new_price}
          old_price={item.old_price}
        />
      ))}
    </div>
  </div>

  {/* EMAIL SECTION */}
  <div className="bg-[radial-gradient(circle_farthest-side,rgba(128,0,228,0.1),#000000)] text-white text-center py-10 max-w-screen-2xl mx-auto">
    <h1 className="text-3xl lg:text-5xl font-bold mb-4">Get Exclusive Offers On Your Email</h1>
    <p className="text-lg lg:text-xl mb-6">Send us your email & stay updated</p>
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 max-w-lg mx-auto">
      <input
        type="email"
        className="flex-1 p-3 text-sm rounded-lg bg-transparent border border-transparent shadow-[0_0_10px_rgba(128,118,228,0.7)] focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder="Enter Your Email Id"
      />
      <button className=" text-white h-10 w-24 lg:w-28 bg-transparent border border-transparent shadow-[0_0_10px_rgba(128,118,228,0.7)] focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-full transition ease-in-out duration-300 transform hover:scale-105">
        Submit
      </button>
    </div>
  </div>
</div>

    </>
  );
};

export default Home;
