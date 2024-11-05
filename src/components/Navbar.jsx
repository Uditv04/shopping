import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from './ShopContext';

const Navbar = () => {
    const [product, setProduct] = useState('shop');
    const { getTotalCartItems } = useContext(ShopContext);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <div className='bg-[#c22b79]'>
            <nav className='flex items-center justify-between p-4'>
                <a href="/" className='flex items-center'>
                    <img src="/Luxora.png" alt="Logo" width={40} height={40} />
                </a>
                
                {/* Toggle Button for Mobile */}
                <button
                    className='lg:hidden text-white p-2'
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <lord-icon src="https://cdn.lordicon.com/zpxybbhl.json" trigger="hover" style={{ width: "30px", height: "30px" }} />
                </button>

                {/* Links - shown based on screen size */}
                <ul className={`lg:flex gap-7 mx-4 text-md ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
                    <li onClick={() => setProduct("shop")} className='hover:font-bold'><Link to='/'>SHOP</Link>{product === "shop" && <hr />}</li>
                    <li onClick={() => setProduct("men")} className='hover:font-bold'><Link to='/men'>MEN</Link>{product === "men" && <hr />}</li>
                    <li onClick={() => setProduct("women")} className='hover:font-bold'><Link to='/women'>WOMEN</Link>{product === "women" && <hr />}</li>
                    <li onClick={() => setProduct("kids")} className='hover:font-bold'><Link to='/kids'>KIDS</Link>{product === "kids" && <hr />}</li>
                </ul>

                {/* Search bar - adjusts width on smaller screens */}
                <div className='hidden lg:flex gap-2 flex-1 justify-center'>
                    <input
                        className='w-full lg:w-[36vw] h-[30px] rounded-md text-black p-2'
                        placeholder='Search for products, brands & more'
                        type="text"
                    />
                    <lord-icon
                        style={{ width: "30px", height: "30px", marginLeft: "-4px", borderRadius: "6px" }}
                        src="https://cdn.lordicon.com/fkdzyfle.json"
                        trigger="hover"
                    ></lord-icon>
                </div>

                {/* Icons */}
                <div className='flex items-center gap-4 text-sm font-bold'>
                    <Link to="/login" className='flex justify-center items-center'>
                        <lord-icon
                            style={{ width: "30px", height: "30px" }}
                            src="https://cdn.lordicon.com/hrjifpbq.json"
                            trigger="hover"
                        ></lord-icon>
                    </Link>

                    {/* <Link to="/wishlist" className='flex justify-center items-center'>
                        <lord-icon
                            style={{ width: "30px", height: "30px" }}
                            src="https://cdn.lordicon.com/ulnswmkk.json"
                            trigger="hover"
                        ></lord-icon>
                    </Link> */}

                    <Link to="/cart" className='relative flex justify-center items-center'>
                        <lord-icon
                            style={{ width: "30px", height: "30px" }}
                            src="https://cdn.lordicon.com/pbrgppbb.json"
                            trigger="hover"
                        ></lord-icon>
                        <div className="cart-count absolute top-0 right-0 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            {getTotalCartItems()}
                        </div>
                    </Link>
                </div>
            </nav>

            {/* Mobile Search Bar */}
            <div className={`flex lg:hidden p-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                
            </div>
        </div>
    );
}

export default Navbar;
