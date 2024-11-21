import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useNavigate} from 'react-router-dom'
import { faBed, faCalendarDays, faMagnifyingGlass, faPerson } from '@fortawesome/free-solid-svg-icons';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {format} from 'date-fns'






export default function Header({type}) {
    const [fixDate,setFixDate]= useState(false)
    const [endSpot,setEndSpot]= useState("")

    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])
    const [personCount,setPersonCount] = useState(false);
    const [perCount,setPerCount] = useState({
        adults:0,
        children:0,
        room:1
    });
    const navigation = useNavigate()

    const handelSearch=()=>{
        navigation('/hotels',{state:{endSpot,date,perCount}})

    }
    return (
        <div className={type==="list"?"header listHeader":"header"}>
            <div className={type==="list"?"headerContainer hotelListMode":"headerContainer"}>
            {type !=="list" && <>
                <div className="headerList">
                    <h1 className="title"><span className='vacation'>Vacations</span> Made Easy.
                    </h1>
                    <p className="description">Hassle-free bookings for unforgettable trips – register for free and get 10% off your first booking!</p>
                    <button className="btn">Signin / Register</button>

                </div>
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faBed} className='icon' />
                        <input type="text" 
                        placeholder='search place' 
                        className='headerSearchInput'
                        required
                        onChange={(e)=>setEndSpot(e.target.value)}
                         />
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCalendarDays} className='icon' />
                        <span onClick={()=>setFixDate(!fixDate)} 
                        
                        className='headerSearchDate'>
                        {`${format(date[0].startDate,"dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}
                        </span>
                    {fixDate && <DateRange editableDateInputs={true} 
                    onChange={item =>setDate([item.selection])} 
                    moveRangeOnFirstSelection={false} 
                    ranges={date} 
                    minDate={new Date}
                    className='date' />}
                        
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className='icon' />
                        <span className='headerSearchDate' onClick={()=>setPersonCount(!personCount)}>
                        {`${perCount.adults} adults·${perCount.children} children·${perCount.room} room`}
                        </span>
                        {personCount && <div className="options">
                            <div className="optionItem">
                            <span className="optiontext">Adult</span>
                            <div className="optionCounter">
                            <button className="optionCounterButton"
                            disabled={perCount.adults<=0}
                            onClick={()=>setPerCount({...perCount ,adults:perCount.adults - 1})}>-</button>
                            <span className="optionCounterNumber">{perCount.adults}</span>
                            <button className="optionCounterButton" 
                            onClick={()=>setPerCount({...perCount ,adults:perCount.adults + 1})}>+</button></div>
                            
                            </div>
                            <div className="optionItem">
                            <span className="optiontext">Children</span>
                            <div className="optionCounter">
                            <button className="optionCounterButton"
                            disabled={perCount.children<=0}
                            onClick={()=>setPerCount({...perCount ,children:perCount.children - 1})}>-</button>
                            <span className="optionCounterNumber">{perCount.children}</span>
                            <button className="optionCounterButton"
                            onClick={()=>setPerCount({...perCount ,children:perCount.children + 1})}>+</button></div>
                            
                            </div>
                            <div className="optionItem">
                            <span className="optiontext">room</span>
                            <div className="optionCounter">
                            <button className="optionCounterButton"
                            disabled={perCount.room<=1}
                            onClick={()=>setPerCount({...perCount ,room:perCount.room - 1})}>-</button>
                            <span className="optionCounterNumber">{perCount.room}</span>
                            <button className="optionCounterButton"
                            onClick={()=>setPerCount({...perCount ,room:perCount.room + 1})}>+</button>
                            </div>
                            
                            </div>
                        </div>}
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handelSearch}><FontAwesomeIcon icon={faMagnifyingGlass} /> Search</button>
                    </div>
                </div></>}
            </div>
        </div>


    )
}
