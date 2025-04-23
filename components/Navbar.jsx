import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <a href="/menu">
           <img src="/LOGO7.png" alt="" />
      </a>
      <div className='nav-list'>
        <Link to={'/'} className='color'>
            Home
        </Link>
        <Link to={'/order'} className='color'>
            Order
        </Link>
        <Link to={'/menu'} className='color'>
            Menu
        <img className='color' src="" alt=""/>
        </Link>
      </div>
      <div className='dollor'>
     
      </div>
    </div>
  )
}

export default Navbar