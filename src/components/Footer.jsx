import React from 'react'

const Footer = () => {
  return (
    <div className='footer flex flex-col justify-center items-center gap-6 sm:gap-8 bg-pink-500 text-white py-8 sm:py-10'>
      
      {/* Footer Logo */}
      <div className="footer-logo flex flex-col sm:flex-row gap-4 items-center">
        <img src="/Luxora.png" alt="Luxora Logo" width={44} height={44} />
        <p className='text-4xl sm:text-5xl font-light'>LUXORA</p>
      </div>

      {/* Footer Links */}
      <ul className="footer-links flex flex-col sm:flex-row gap-4 sm:gap-8 text-lg sm:text-xl list-none">
        <li><a href="/">Company</a></li>
        <li><a href="/">Products</a></li>
        <li><a href="/">Office</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Contact</a></li>
      </ul>

      {/* Social Icons */}
      <div className="social-icons flex gap-4 xl:gap-8 sm:gap-8 p-3 bg-pink-400 rounded-lg">
      <lord-icon
    src="https://cdn.lordicon.com/bfoumeno.json"
    trigger="hover">
</lord-icon>
        <lord-icon
    src="https://cdn.lordicon.com/scdlwzys.json"
    trigger="hover">
</lord-icon>
<lord-icon
    src="https://cdn.lordicon.com/dnphlhar.json"
    trigger="hover">
</lord-icon>
      </div>

      {/* Footer Bottom Section */}
      <div className='flex flex-col items-center gap-4 sm:gap-6 w-full mt-4 sm:mt-6 text-sm sm:text-xl'>
        <hr className='w-[90%] sm:w-[80%] border-none h-1 bg-[#c7c7c7]' />
        <p>Copyright &copy; 2024 | All Rights Reserved</p>
      </div>

    </div>
  )
}

export default Footer
