import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/Home'
import List from './pages/list/List'
import HotelView from './pages/viewHotel/HotelView'
import Login from './pages/login/Login'
import Register from './pages/register/Register'


export default function MainHome() {
  
  return (
    <div>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/hotels' element={<List/>} />
        <Route path='/hotel/:id' element={<HotelView/>} />
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>


    </Routes>

    </BrowserRouter>
      
    </div>
  )
}
