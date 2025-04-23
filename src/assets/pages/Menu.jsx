import React from 'react'
import Card from '../../../components/Card'

const Menu = ({menu,handleLocal}) => {
  return (
    <div className='burger11'>
      <h2 className='menu-h2'>
        Viberite svoy burger
      </h2>
      <div className='menu-list'>
      
        {menu.map((item)=> <Card key={item.id} {...item} handleLocal={handleLocal} /> )}      
       
         
      </div>
    </div>
  )
}

export default Menu