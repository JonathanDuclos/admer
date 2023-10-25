import React from 'react'
import { Link } from 'react-router-dom'

const MenuItem = ({text, icon, link, key}) => {
  return (
    <Link to={`/${link}`} className=''>
        <div className="flex items-center">{icon}</div>
        {/* <div className="w-3/4 items-center capitalize text-xs">{text}</div> */}
    </Link>
  )
}

export default MenuItem