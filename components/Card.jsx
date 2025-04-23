import React from 'react'

const Card = ({id, title, desc, price, netto, img, handleLocal}) => {
  return (
    <div className='menu-item'>
            <img src={img} alt="burgerImage" />
            <h3 className='item-title'>
           {title}
            </h3>
            <p className='item-desc'>
             {desc}
            </p>
            <div className='item-bottom'> 
              <div className='price-box'>
                <h3 className='price'>
                {price} $
                </h3>
                <p className='netto'>
                {netto} gr
                </p>
              </div>
              <button className='item-buy' onClick={()=>handleLocal({id, title, price, netto, img})}>
               <a href="https://t.me/Xabibullaev_10">
                   Buyurtma berish
               </a>
               
              
                <img src="/buy-icon.png" alt="" />
              </button>
             
            </div>
          </div>
  )
}

export default Card