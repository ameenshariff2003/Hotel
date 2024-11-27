import useFetch from '../hooks/useFetch.js'

import React from 'react'
import './FeaturedHotels.scss'


const FeaturedHotels = () => {
    const {data,loading,error} = useFetch("http://localhost:8000/server/hotels?feauterd=true&limit=4")
    console.log(data)

  return (
    <div className='featuredHotels'>
    {loading
    ?
    ("its not you its us pleas wait")
    :
    <>
    {
        data.map((item)=>(
        
    <div className="fhItem" key={item._id}>
    <img   src={item.photos && item.photos.length > 0 ? item.photos[0] : "https://st.depositphotos.com/1987177/3470/v/450/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg"} 
 alt="" className="fhImg" />
    <span className="fhName">{item.name}</span>
    <span className="fhCity">{item.city}</span>
    <span className="fhPrice">Starting from ₹{item.cheapPrice}</span>
    {item.rating && <div className="fhRating">
        <button>{item.rating}</button>
        <span>Exclent</span>
    </div>}
    </div>
     ))
     }
    </>}
    
    </div>
  )
}

export default FeaturedHotels
