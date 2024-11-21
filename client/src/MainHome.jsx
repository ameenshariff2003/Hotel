import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import HotelView from './pages/viewHotel/HotelView'


export default function MainHome() {
  
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels' element={<List/>} />
        <Route path='/hotel/:id' element={<HotelView/>} />


    </Routes>

    </BrowserRouter>
      
    </div>
  )
}
