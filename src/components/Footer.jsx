import React from 'react'
const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center gap-8 bg-pink-500 text-white'>
        <div className="footer-logo flex gap-5 items-center">
            <img src="/Luxora.png" alt="" width={44} height={44} />
            <p className='text-5xl font-light'>LUXORA</p>
        </div>
        <ul className="footer-links flex gap-12 text-xl list-none">
            <li><a href="/">Company</a></li>
            <li><a href="/">Products</a></li>
            <li><a href="/">Office</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Contact</a></li>
        </ul>
        <div className="social-icons flex gap-8 p-2 pb-2 bg-[#fbfbfb] ">
            <img src="/instagram_icon.png" alt="" />
            <img src="/pintester_icon.png" alt="" />
            <img src="/whatsapp_icon.png" alt="" />
        </div>
        <div className='flex flex-col items-center gap-8 w-full mb-[30px] text-xl'>
            <hr className='w-[80%] border-none h-1 bg-[#c7c7c7]' />
            <p>Copyright &copy; 2024 | All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer