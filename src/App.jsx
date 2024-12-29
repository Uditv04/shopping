import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Shop from './components/pages/Shop'
import ShopCategory from './components/pages/ShopCategory'
import Product from './components/pages/Products'
import Cart from './components/pages/Cart'
import Login from './components/pages/Login'
import Footer from './components/Footer.jsx'
import banner_mens from '../public/banner_mens.png'
import banner_women from '../public/banner_women.png'
import banner_kids from '../public/banner_kids.png'
import Signup from './components/pages/Signup'

function App() {

  return (
    <>
    <BrowserRouter>


    <Navbar/>
    <Routes>
<Route path='/' element={<Shop/>}/>
<Route path='/men' element={<ShopCategory banner={banner_mens} category="men"/>}/>
<Route path='/women' element={<ShopCategory banner={banner_women} category="women"/>}/>
<Route path='/kids' element={<ShopCategory banner={banner_kids} category="kid"/>}/>
<Route path='/product' element={<Product/>}>
<Route path=':productId' element={<Product/>}/>


</Route>
<Route path='/cart' element={<Cart/>}/>
<Route path='/login' element={<Login/>}/>
<Route path='/signup' element={<Signup/>}/>
    </Routes>

    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
