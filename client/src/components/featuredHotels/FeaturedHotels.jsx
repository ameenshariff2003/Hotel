import React from 'react'
import './FeaturedHotels.scss'


const FeaturedHotels = () => {
  return (
    <div className='featuredHotels'>
    <div className="fhItem">
    <img src="https://i.pinimg.com/736x/05/e2/5e/05e25ea261f15a700722c16c9856ba0e.jpg" alt="" className="fhImg" />
    <span className="fhName">Amet haveli</span>
    <span className="fhCity">Udaipur</span>
    <span className="fhPrice">Starting from ₹2000</span>
    <div className="fhRating">
        <button>8.9</button>
        <span>Exclent</span>
    </div>

    </div> 
    <div className="fhItem">
    <img src="https://i.pinimg.com/736x/eb/b3/33/ebb3339ecddafd736aeee184e56ae277.jpg" alt="" className="fhImg" />
    <span className="fhName">Royal Orchid</span>
    <span className="fhCity">Bengaluru</span>
    <span className="fhPrice">Starting from ₹1200</span>
    <div className="fhRating">
        <button>8.9</button>
        <span>Exclent</span>
    </div>

    </div><div className="fhItem">
    <img src="https://i.pinimg.com/736x/a9/66/21/a96621244f601833221726374e77a881.jpg" alt="" className="fhImg" />
    <span className="fhName">Bagh Bharatpur</span>
    <span className="fhCity">Ahmed nagar</span>
    <span className="fhPrice">Starting from ₹3000</span>
    <div className="fhRating">
        <button>8.9</button>
        <span>Exclent</span>
    </div>

    </div><div className="fhItem">
    <img src="https://i.pinimg.com/736x/3e/c9/1a/3ec91aca554440b691bb6dac4d910dc9.jpg" alt="" className="fhImg" />
    <span className="fhName">The Hayat</span>
    <span className="fhCity">Mumbai</span>
    <span className="fhPrice">Starting from ₹2000</span>
    <div className="fhRating">
        <button>8.9</button>
        <span>Exclent</span>
    </div>

    </div><div className="fhItem">
    <img src="https://i.pinimg.com/736x/05/e2/5e/05e25ea261f15a700722c16c9856ba0e.jpg" alt="" className="fhImg" />
    <span className="fhName">Shangriya</span>
    <span className="fhCity">Udaipur</span>
    <span className="fhPrice">Starting from ₹2000</span>
    <div className="fhRating">
        <button>8.9</button>
        <span>Exclent</span>
    </div>

    </div> 
    </div>
  )
}

export default FeaturedHotels
