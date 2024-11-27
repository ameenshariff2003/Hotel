import './list.scss'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import useFetch from '../../components/hooks/useFetch.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react'
import { format, setDate } from 'date-fns'
import { DateRange } from 'react-date-range'
import FindItem from '../../components/findItems/FindItem';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


export default function List() {
  const location = useLocation()
  const [endSpot,setEndSpot] = useState(location.state.endSpot) ;
  const [clickDate,setClickDate] = useState(false)
  const [dates,setdates] = useState(location.state.dates) ;
  const [perCount,setPerCount] = useState(location.state.perCount) ;
  const [min,setMin] = useState(undefined) ;
  const [max,setMax] = useState(undefined) ;


  const {data,loading,error,refetch} = useFetch(
    `http://localhost:8000/server/hotels?city=${endSpot}&min=${min||0}&max=${max || 10000}`
  )
  console.log(data)
  

 const  handelChange = ()=>{
  refetch()
 }

  return (
    <div>
    <Navbar/>
    <Header type="list"/>
    <div className="lContainer">
      <div className="lWrapper">
        <div className="lSearch">
          <h1 className="search" >Search</h1>
          <div className="blockSearch">
            <label className='label' >End Spot</label>
            <input type="text" placeholder ={endSpot} onChange={(e)=>setEndSpot(e.target.value)} className='sInput'/>
          </div>
          <div className="blockSearch">
            <label className='label' >Checkin-date</label>
            <span className='spand' onClick={()=>setClickDate(!clickDate)}>{`${format(dates[0].startDate,"dd/MM/yyyy")} to ${format(dates[0].endDate,"dd/MM/yyyy")}`}</span>
            {clickDate && <DateRange className='calender' onChange={item=>setDates([item.selection])}
              minDate={new Date}
              ranges={dates}
            />}
          </div>
          <div className="others">
            <label className='labelD'>Others Details</label>
            <div className="detailsItems">
              <span className="detailsItem">
              Min Price <small>per Night</small>

            </span>
            <input type="number" onChange={(e)=>setMin(e.target.value)} min={500} className='detailInput sInput' />
            </div>
            <div className="detailsItems">
              <span className="detailsItem">
              max Price <small>per Night</small>

            </span>
            <input type="number" max={50000} onChange={(e)=>setMax(e.target.value)} className='detailInput sInput' />
            </div>
            <div className="detailsItems">
              <span className="detailsItem">
              Adults

            </span>
            <input type="number" min={1} className='detailInput sInput' placeholder={perCount.adults} />
            </div>
            <div className="detailsItems">
              <span className="detailsItem">
              Childrens

            </span>
            <input type="number"  min={0} className='detailInput sInput' placeholder={perCount.children} />
            </div>
            <div className="detailsItems">
              <span className="detailsItem">
              Room

            </span>
            <input type="number" min={1} className='detailInput sInput' placeholder={perCount.room}/>
            </div>
            
          </div>
          <button className='listBtn' onClick={handelChange}><FontAwesomeIcon icon={faMagnifyingGlass}/>Search</button>
         
          
        </div>
        <div className="lResult">
        {loading ? "loading pleas wait":<>
          {data.map((item)=>(

        <FindItem item={item} key={item._id}/>
          ))
          }
        </>}
        
        
         </div>
      </div>
    </div>
      
    </div>
  )
}
