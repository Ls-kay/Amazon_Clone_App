import React from 'react'
import "./Home.css"

import Navbar from '../Navbar/Navbar'
import images from '../../Constants/images'
import Product from '../Product/Product'



function Home() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <img className="home__image" src={images.prime} alt=""/>
      </div>

      <div className="home__row">
        <Product
          id="1"
          title="Vaseline Intensive Care Cocoa Radiant For Glowing Skin 3 Count Body Gel Oil Body Oil Made with 100% Pure Cocoa Butter + Replenishing Oils 6.8oz"
          price={39.99}
          rating={5}
          image={images.vaseline}
        />
        <Product
          id="2"
          title="WorkPro® Quantum 9000 Series Ergonomic Mid-Back Mesh/Mesh Chair, Black"
          price={109.99}
          rating={4}
          image={images.chair}
        />
      </div>
      <div className="home__row">     
        <Product
          id="4"
          title="Mental Toughness For Young Athletes: 17 Mindset Tips"
          price={19.99}
          rating={5}
          image={images.book}
        />
        <Product
          id="1"
          title="Google Pixel 8 - Unlocked Android Smartphone "
          price={39.99}
          rating={5}
          image={images.phone}
        />
        <Product
          id="5"
          title="HuiJuKeJi Mini Sticker Printer Bluetooth Smart Pocket Inkless Thermal Printer"
          price={105.59}
          rating={5}
          image={images.print}
        />
      </div>
      <div className="home__row">     
        <Product
          id="1"
          title="Vaseline Intensive Care Cocoa Radiant For Glowing Skin 3 Count Body Gel Oil Body Oil Made with 100% Pure Cocoa Butter + Replenishing Oils 6.8oz"
          price={39.99}
          rating={5}
          image={images.lapDesk}
        />
      </div>      
    </div>
  )
}

export default Home