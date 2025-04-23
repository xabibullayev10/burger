import React from 'react'

const Order = () => {
  return (
    <div className='order'>
      <h2 className='order-top-text'>
        Buyurtma berish
      </h2>
      <div className='order-cont'>
        <h3 className='order-text-head'>

        </h3>
        
        <input type="text" className='order-text-input' placeholder='Ismingizni kiriting'/>
        <input type="text" className='order-text-input' placeholder='Telefon nomeringiz'/>
        <input type="text" className='order-text-input' placeholder='Manzilingiz'/>
        
        <button className='order-buy'>
          <a href="https://t.me/Xabibullaev_10">
                Buyurtma berish 
          </a>
           
        </button>

      </div>
      
    </div>
  )
}

export default Order