import React, { useState } from 'react'
import "./hotel.scss"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Email from '../../components/email/Email'
import Footer from '../../components/footer/Footer'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'

export default function HotelView() {
  const [imgSlide ,setImgSlide] = useState(0);
  const [imgOpen ,setImgOpen] = useState(false);

const imgs = [
  {
    url:"https://i.pinimg.com/736x/b4/ca/78/b4ca78513a3793440de458067670808d.jpg"
  },
  {
    url:"https://i.pinimg.com/736x/d8/7b/c8/d87bc8af20de8a9d730ba2552efba94d.jpg"
  },
  {
    url:"https://i.pinimg.com/736x/e4/72/1f/e4721f237b7fa25ec60608883ea2dccf.jpg"
  },
  {
    url:"https://i.pinimg.com/736x/3e/6d/28/3e6d28100013095183e9d3b5fe99026d.jpg"
  },
  {
    url:"https://i.pinimg.com/236x/78/00/c3/7800c356cd96fe0a300ee9f58785ff1d.jpg"
  },
  {
    url:"https://i.pinimg.com/736x/76/de/f8/76def86d88e91a377a6e58cd4616e8f2.jpg"
  },


]
const imgOpenHandler =(i)=>{
  setImgSlide(i);
  setImgOpen(true);
}
const handelImg =(slide)=>{

  let newSlideNumber;
  if(slide ==='l'){
    newSlideNumber = imgSlide === 0 ? 5:imgSlide-1
  }else{
    newSlideNumber = imgSlide === 5? 0:imgSlide+1
  }
  setImgSlide(newSlideNumber);

}

  return (
    <div>
    <Navbar/>
    
    <Header type="list"/>
    <div className="hotelView">
    {imgOpen && <div className="imgSlider">
    <FontAwesomeIcon onClick={()=>handelImg("l")} className='left' icon={faArrowLeft}/>
    <div className="slideImg">
    <img src={imgs[imgSlide].url} alt="" className="slider" />
    </div>
    
    <FontAwesomeIcon onClick={()=>handelImg("r")}   className='right' icon={faArrowRight}/>
    <FontAwesomeIcon className='close'  onClick={()=>setImgOpen(false)} icon={faXmark}/>


    </div>}
      <div className="viewWrapper">
      <button className="bookNow">Reserve now</button>
        <h1 className="vTitle">The hayat</h1>
        <div className="vAddress">
          <FontAwesomeIcon icon={faLocationDot}/>
          <span className='addressView'>25d Street building no 6 property no 9 </span>
        </div>
        <span className="distance">
          Great Location - 2km from Airport
        </span>
        <span className="price">
          Get it for rs 3000 and free cab service from Airport
        </span>
        <div className="viewImg">
          {imgs.map((img,i)=>(
          <div className='img'>
          <img  onClick={()=>imgOpenHandler(i)} src={img.url} alt="" className="hotelImg" />
          </div>
          ))}
        </div>
        <div className="viewDetails">
          <div className="viewText">
            <h1 className="titled">The Hayat</h1>
            <p className="descriptiond">
            Located in the heart of the city, The Hayat Hotel offers a luxurious escape for both business and leisure travelers. Our stylishly designed rooms feature modern amenities, providing the perfect balance of comfort and sophistication. 
            Guests can unwind at our rooftop bar, enjoy a refreshing dip in the pool, or indulge in a relaxing massage at our wellness center. The Hayat’s in-house restaurant offers a selection of gourmet dishes, combining international flavors with local ingredients to create an unforgettable dining experience.
            With impeccable service, state-of-the-art facilities, and a prime location close to top attractions, The Hayat Hotel is your ideal choice for a memorable stay.
            </p>
          </div>
          <div className="priced">
            <h2>Perfect for 9-night stay</h2>
            <span>
            Book your stay with us today and experience elegance, comfort, and convenience at its finest.
            </span>
            <h2>&#8377;<b>27000</b></h2>
          <button className='pbtn'>lets go</button>
          </div>
        </div>
      </div>
      <Email/>
      <Footer/>
      
    </div>
    
      
    </div>

    
  )
}
