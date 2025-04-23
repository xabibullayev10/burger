import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
   
    <div className='hero'>
      <div className='hero'>
        <div className='hero-cont'>
      <button className='new-menu'>
       Yangi menyu
      </button>
      <h1 className='hero-head'>
      Web Burger
      </h1>
      <p className='hero-p'>
      Biz menyumizni yangiladik, mavsumiy yangi mahsulotlarni tatib ko'rishga shoshiling va burgerlarimizdan ajoyib ta'midan bahramand bo'ling. Biz siz uchun tanlangan marmar mol go'shtidan shaharning eng yaxshi burgerlarini tayyorlaymiz.
      </p>
      <button className='menu'>
        <Link to={'/menu'} className='menu-link'>
       Menuni ko'rish
        </Link>
      </button>

        </div>
     </div>
      </div>
  )
}

export default Home
