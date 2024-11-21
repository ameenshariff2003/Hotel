import React from 'react'
import './Email.scss'

const Email = () => {
  return (
    <div className='email'>
    <h1 className="titleMail">Email Us Today!</h1>
    <span className="desc">Subscribe for daily holiday deals with unimaginable prices</span>
    <div className="inputMail">
        <input type="mail" placeholder='Enter Email' />
        <button>Submit</button>
    </div>
      
    </div>
  )
}

export default Email
