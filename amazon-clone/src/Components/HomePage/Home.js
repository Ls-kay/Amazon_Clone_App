import React from 'react'
import "./Home.css"

import Navbar from '../Navbar/Navbar'
import images from '../../Constants/images'



function Home() {
  return (
    <div>
      <Navbar />
      <div className="home">
        <img className="home__image" src={images.prime} alt=""/>
      </div>
    </div>
  )
}

export default Home