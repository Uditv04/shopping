import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [product, setProduct] = useState('shop');
    return (
        <div className='bg-[#c22b79] '>
            <nav className='flex p-5'>
                <a href="/"><img className='mx-5' src="/Luxora.png" alt="" width={40} height={40} /></a>
                <ul className='flex gap-7 mx-16 text-md '>
                    <li onClick={() => { setProduct("shop") }} className='hover:font-bold'><Link to='/'>SHOP</Link>{product === "shop" ? <hr /> : <></>}</li>
                    <li onClick={() => { setProduct("men") }} className='hover:font-bold'><Link to='/men'>MEN</Link>{product === "men" ? <hr /> : <></>}</li>
                    <li onClick={() => { setProduct("women") }} className='hover:font-bold'><Link to='/women'>WOMEN</Link>{product === "women" ? <hr /> : <></>}</li>
                    <li onClick={() => { setProduct("kids") }} className='hover:font-bold'><Link to='/kids'>KIDS</Link>{product === "kids" ? <hr /> : <></>}</li>
                </ul>
                <div className='flex gap-1 '>
                    <input className='w-[36vw] h-[30px] rounded-md text-black' placeholder='   Search for products,brands & more' type="text" />
                    <lord-icon
                        style={{ "width": "30px", "height": "30px", "paddingTop": "1px", "marginLeft": "-4px", "borderRadius": "6px" }}
                        src="https://cdn.lordicon.com/fkdzyfle.json"
                        trigger="hover">
                    </lord-icon>

                </div>

                <div className='flex gap-5 mx-40 text-sm font-bold '>
                    <Link to="/login">
                        <button className='flex justify-center items-center' ><lord-icon
                            style={{ "width": "30px", "height": "30px" }}
                            src="https://cdn.lordicon.com/hrjifpbq.json"
                            trigger="hover">
                        </lord-icon>
                        </button>
                    </Link>


                   <Link to="/wishlist">
                   <button className='flex justify-center items-center' ><lord-icon
                        style={{ "width": "30px", "height": "30px" }}
                        src="https://cdn.lordicon.com/ulnswmkk.json"
                        trigger="hover">
                    </lord-icon>
                    </button>
                            </Link> 

                    <Link to="/cart">
                        <button className='flex justify-center items-center ' > <lord-icon
                            style={{ "width": "30px", "height": "30px" }}
                            src="https://cdn.lordicon.com/pbrgppbb.json"
                            trigger="hover">
                        </lord-icon><div className="cart-count">0</div>
                        </button>
                        
                    </Link>
                    
                </div>

            </nav>
        </div>
    )
}

export default Navbar