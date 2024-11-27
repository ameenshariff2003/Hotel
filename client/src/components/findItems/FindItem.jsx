import React from 'react'
import './findItem.scss'
import { Link } from 'react-router-dom'

const FindItem = ({item}) => {
  return (
    <Link className='linkClass' to={`/hotel/${item._id}`}>
    <div className='findItem'>
    <img src={item.photos && item.photos.length > 0 ? item.photos[0] : "https://st.depositphotos.com/1987177/3470/v/450/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg"}
     className='findItemImg' alt="" />
    <div className="findDesc">
        <h1 className="title">{item.name}</h1>
        <span className='distance'>{item.distance}Km from Airport</span>
        <span className='taxi'>Free Taxi from Airport</span>
        <span className='subtitle'>Mordern Designed with private balcony</span>
        <span className='features'>{item.desc}</span>
        <span className='cancel'>Free cancellation</span>
        <span className='cancelSub'>Book now cancel later with zero charges</span>
    </div>
    <div className="fintDetails">
    {item.rating && <div className="fintDetailsrating">
        <span className="fintDetailsratingSpan">Excelent</span>
        <button className="fintDetailsratingBtn">{item.rating}</button>
    </div>}
    <div className="fintDetailsPrice">
       <span className='fdPrice'>₹ {item.cheapPrice}</span>
       <span className='fdTax'>Inclusive all taxes</span>
       <Link to={`/hotel/${item._id}`}>
        <button className="fdBtn">Check Dates</button>
      </Link>
    </div>
        
    </div>
      
    </div>
    </Link>
  )
}

export default FindItem
