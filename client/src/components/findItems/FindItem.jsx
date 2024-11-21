import React from 'react'
import './findItem.scss'

const FindItem = () => {
  return (
    <div className='findItem'>
    <img src="https://i.pinimg.com/736x/22/df/f0/22dff0e3947f094090d03f290ac4bd37.jpg" className='findItemImg' alt="" />
    <div className="findDesc">
        <h1 className="title">Hilton Hotel</h1>
        <span className='distance'>10Km from Airport</span>
        <span className='taxi'>Free Taxi from Airport</span>
        <span className='subtitle'>Mordern Designed with private balcony</span>
        <span className='features'>Entire Studio - 1 bathroom - 42Sqft fullbed</span>
        <span className='cancel'>Free cancellation</span>
        <span className='cancelSub'>Book now cancel later with zero charges</span>
    </div>
    <div className="fintDetails">
    <div className="fintDetailsrating">
        <span className="fintDetailsratingSpan">Excelent</span>
        <button className="fintDetailsratingBtn">8.7</button>
    </div>
    <div className="fintDetailsPrice">
       <span className='fdPrice'>₹ 3000</span>
       <span className='fdTax'>Inclusive all taxes</span>
       <button className="fdBtn">Check Dates</button>
    </div>
        
    </div>
      
    </div>
  )
}

export default FindItem
