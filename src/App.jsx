

import Footer from '../components/Footer'
import {  Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import Navbar from '../components/Navbar'
import '../src/App.css'
import Menu from './assets/pages/Menu'
import Order from './assets/pages/Order'
import { data } from '../data'

function App() { 

  let menu = data;

  const handleLocal = (burger) =>{
    localStorage.setItem("data",JSON.stringify(burger))
  }

    return (
    <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
     <Route path='/order' element={<Order/>} />
      <Route path='/menu' element={<Menu menu={menu} handleLocal={handleLocal}/>} />
   </Routes>
   <Footer/>
   
    </>
    )
  }

export default App
