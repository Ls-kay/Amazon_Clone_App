import React from 'react'
import './Navbar.css'

import images from '../../Constants/images'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../../StateProvider'


function Navbar() {
  // const [{ }] = useStateValue();

  return (
    <nav className="navbar">
        <Link to="/login">
          <img className="navbar__logo" src={images.logo} alt="logo"/>
        </Link>

        <div className="navbar__search">
          <input type="text" className="navbar__searchInput" />
          <SearchIcon className="navbar__searchIcon"/>          
        </div>

        <div className="navbar__icons">          
          <Link to="/login" className="navbar__links">
            <div className="navbar__options">
              <span className="navbar__optionLineOne">Hello Steve</span>
              <span className="navbar__optionLineTwo">Sign In</span>
            </div>
          </Link>

          <Link to="/login" className="navbar__links">
            <div className="navbar__options">
              <span className="navbar__optionLineOne">Returns</span>
              <span className="navbar__optionLineTwo">& Orders</span>
            </div>
          </Link>

          <Link to="/login" className="navbar__links">
            <div className="navbar__options">
              <span className="navbar__optionLineOne">Your</span>
              <span className="navbar__optionLineTwo">Prime</span>
            </div>
          </Link>

          <Link to="/checkout" className="navbar__links">
            <div className="navbar__optionBasket">
              <ShoppingBasketIcon />
              <span className="navbar__optionLineTwo navbar__basketCount">{}</span>
            </div>
          </Link>
        </div>
    </nav>
  )
}

export default Navbar