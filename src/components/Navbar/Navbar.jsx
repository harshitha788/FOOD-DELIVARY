import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {


    const[menu,setMenu]=useState("menu");

    const handleCartClick = (event) => {
        event.preventDefault();
        const cart = document.getElementById('cart');
        if (cart) {
            cart.scrollIntoView({behavior: 'smooth'});
            setMenu('cart');
        }
    }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <li><a href='#' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</a></li>
        <li><a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a></li>
        <li><a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</a></li>
        <li><a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a></li>
        </ul>
      <div className="navbar-right">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-search-icon">
            <a href="#cart" className="navbar-cart-link" aria-label="Go to cart" onClick={handleCartClick}>
              <img src={assets.basket_icon} alt="Cart" />
              <div className="dot"></div>
            </a>
          </div>
          <button onClick={()=>setShowLogin(true)}>Sign In</button>
        </div>
    </div>
  )
}

export default Navbar
