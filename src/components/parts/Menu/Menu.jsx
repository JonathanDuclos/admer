import React from 'react'
import { menuData } from '../../../data/dummy'
import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <div className='w-auto mb-2 p-1'>
        <div className='flex justify-around'>
          {
            menuData.map(item => <MenuItem key={item.key} text={item.title} icon={item.icon} link={item.link}/>)
          }
        </div>
    </div>
  )
}

export default Menu