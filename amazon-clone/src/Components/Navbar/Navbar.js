import React from 'react'
import './Navbar.css'

import images from '../../Constants/images'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'

function Navbar() {
  return (
    <nav className="navbar">
        <Link to="/login">
          <img className="navbar__logo" src={images.logo} alt="logo"/>
        </Link>

        <div className="navbar__search">
          <input type="text" className="navbar__searchInput" />
          <SearchIcon className="navbar__searchIcon"/>          
        </div>

        {/* 3 links */}
        <div className="navbar__icons">          
          {/* 1st link */}
          <Link to="/login" className="navbar__links">
            <div className="navbar__options">
              <span className="navbar__optionLineOne">Hello Steve</span>
              <span className="navbar__optionLineTwo">Sign In</span>
            </div>
          </Link>

          {/* 2nd link */}
          <Link to="/login" className="navbar__links">
            <div className="navbar__options">
              <span className="navbar__optionLineOne">Returns</span>
              <span className="navbar__optionLineTwo">& Orders</span>
            </div>
          </Link>

          {/* 3rd link */}
          <Link to="/login" className="navbar__links">
            <div className="navbar__options">
              <span className="navbar__optionLineOne">Your</span>
              <span className="navbar__optionLineTwo">Prime</span>
            </div>
          </Link>

          {/* 4th link */}
          <Link to="/checkout" className="navbar__links">
            <div className="navbar__optionBasket">
              <ShoppingBasketIcon />
              <span className="navbar__optionLineTwo navbar__basketCount">0</span>
            </div>
          </Link>
        </div>
        {/* Basket icon with number */}
    </nav>
  )
}

export default Navbar