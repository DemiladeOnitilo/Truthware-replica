import React from 'react'
import { Link } from 'react-router-dom'

const MainButton = ({to,name}) => {
  return (
    <div className='flex justify-center items-center font-semibold w-auto rounded-lg p-5 bg-red-400 text-center cursor-pointer hover:text-white hover:bg-black hover:border-1 hover:border-white hover:transition hover:duration-500 hover:ease-in-out'>
        <Link to={to}>
           <p>{name}</p>
        </Link>
    </div>
  )
}

export default MainButton