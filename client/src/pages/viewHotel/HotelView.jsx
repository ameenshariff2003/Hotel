import React, { useContext, useState } from 'react'
import "./hotel.scss"
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Email from '../../components/email/Email'
import Footer from '../../components/footer/Footer'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'
import useFetch from '../../components/hooks/useFetch'
import { useLocation } from 'react-router-dom'
import { SearchContext } from '../../components/context/contextApi'

export default function HotelView() {
  const location = useLocation()
  const id = location.pathname.split("/")[2]
  const [imgSlide ,setImgSlide] = useState(0);
  const [imgOpen ,setImgOpen] = useState(false);

  const {data,loading,error,refetch} = useFetch(`http://localhost:8000/server/hotel/find/${id}`);
  const {dates,perCount} = useContext(SearchContext);
  
  const Millisecond_per_day = 1000 * 60 * 60 * 24;

  function dayDifferenc(date1,date2){
  const timeDiff = Math.abs(date2.getTime() - date1.getTime());
  const diffDays = Math.ceil(timeDiff / Millisecond_per_day);
  return diffDays;

  }
  const days = dayDifferenc(dates[0].endDate,dates[0].startDate)


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
    {loading?"loading":<div className="hotelView">
    {imgOpen && <div className="imgSlider">
    <FontAwesomeIcon onClick={()=>handelImg("l")} className='left' icon={faArrowLeft}/>
    <div className="slideImg">
    <img src={data.photos[imgSlide]} alt="" className="slider" />
    </div>
    
    <FontAwesomeIcon onClick={()=>handelImg("r")}   className='right' icon={faArrowRight}/>
    <FontAwesomeIcon className='close'  onClick={()=>setImgOpen(false)} icon={faXmark}/>


    </div>}
      <div className="viewWrapper">
      <button className="bookNow">Reserve now</button>
        <h1 className="vTitle">{data.name}</h1>
        <div className="vAddress">
          <FontAwesomeIcon icon={faLocationDot}/>
          <span className='addressView'>{data.address}</span>
        </div>
        <span className="distance">
          Great Location - {data.distance}km from Airport
        </span>
        <span className="price">
          Get it for rs {data.cheapPrice} /<small>night</small> and free cab service from Airport
        </span>
        <div className="viewImg">
          {data.photos?.map((img,i)=>(
          <div className='img'key={i}>
          <img  onClick={()=>imgOpenHandler(i)} src={img} alt="" className="hotelImg" />
          </div>
          ))}
        </div>
        <div className="viewDetails">
          <div className="viewText">
            <h1 className="titled">{data.title}</h1>
            <p className="descriptiond">
            {data.desc}
      
            </p>
          </div>
          <div className="priced">
            <h2>Perfect for {days}-night stay</h2>
            <span>
            Book your stay with us today and experience elegance, comfort, and convenience at its finest.
            </span>
            <h2>&#8377;<b>{data.cheapPrice*days*perCount.room}</b> <small>({days}-nights)</small></h2>
          <button className='pbtn'>lets go</button>
          </div>
        </div>
      </div>
      <Email/>
      <Footer/>
      
    </div>}
    
      
    </div>

    
  )
}
