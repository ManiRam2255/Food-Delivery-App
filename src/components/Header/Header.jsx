import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order your favourite food here</h2>
            <p>Indulge in a culinary journey like no other with our diverse menu, meticulously curated to tantalize your taste buds and satisfy your cravings. From savory starters to sumptuous mains and decadent desserts, each dish is crafted with precision and passion by our team of talented chefs. </p>
            <button><a href='#explore-menu' onClick={()=>setMenu("Menu")}>View Menu</a></button>
        </div>
      
    </div>
  )
}

export default Header
