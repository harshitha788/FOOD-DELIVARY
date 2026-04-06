import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("menu");
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const handleMenuClick = (section) => {
        setMenu(section);
        setMenuOpen(false);
    };

    const handleCartClick = (event) => {
        event.preventDefault();
        const cart = document.getElementById('cart');
        if (cart) {
            cart.scrollIntoView({behavior: 'smooth'});
            setMenu('cart');
            setMenuOpen(false);
        }
    }

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <button className="navbar-hamburger" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={menuOpen}>
        <span />
        <span />
        <span />
      </button>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><a href='#' onClick={()=>handleMenuClick("home")} className={menu==="home"?"active":""}>Home</a></li>
        <li><a href='#explore-menu' onClick={()=>handleMenuClick("menu")} className={menu==="menu"?"active":""}>menu</a></li>
        <li><a href='#app-download' onClick={()=>handleMenuClick("mobile-app")} className={menu==="mobile-app"?"active":""}>Mobile App</a></li>
        <li><a href='#footer' onClick={()=>handleMenuClick("contact-us")} className={menu==="contact-us"?"active":""}>Contact us</a></li>
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
