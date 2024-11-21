import './list.scss'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useLocation } from 'react-router-dom'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useState } from 'react'
import { format, setDate } from 'date-fns'
import { DateRange } from 'react-date-range'
import FindItem from '../../components/findItems/FindItem';


export default function List() {
  const location = useLocation()
  const [endSpot,setEndSpot] = useState(location.state.endSpot) ;
  const [clickDate,setClickDate] = useState(false)
  const [date,setdate] = useState(location.state.date) ;
  const [perCount,setPerCount] = useState(location.state.perCount) ;
  

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
            <input type="text" placeholder ={endSpot}  className='sInput'/>
          </div>
          <div className="blockSearch">
            <label className='label' >Checkin-date</label>
            <span className='spand' onClick={()=>setClickDate(!clickDate)}>{`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
            {clickDate && <DateRange className='calender' onChange={item=>setDate([item.selection])}
              minDate={new Date}
              ranges={date}
            />}
          </div>
          <div className="others">
            <label className='labelD'>Others Details</label>
            <div className="detailsItems">
              <span className="detailsItem">
              Min Price <small>per Night</small>

            </span>
            <input type="number" min={500} className='detailInput sInput' />
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
          <button className='listBtn'><FontAwesomeIcon icon={'magnifying-glass'}/>Search</button>
         
          
        </div>
        <div className="lResult">
        <FindItem/>
        <FindItem/>
        <FindItem/>
        <FindItem/>
        <FindItem/>
        <FindItem/>
        <FindItem/>
        <FindItem/>
         </div>
      </div>
    </div>
      
    </div>
  )
}
