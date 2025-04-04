import React from 'react'

const ServiceCard = ({name, icon, content}) => {
  return (
    <div className='flex flex-col gap-y-17 text-left w-60 h-auto p-8 rounded-xl bg-[#1b1c1e]'>
        <div className='text-[#fd6262] h-12 w-12'>{icon}</div>
        <div className='flex flex-col gap-y-5'>
            <h1 className='text-[#889ce7] font-bold text-xl'>{name}</h1>
            <p className='text-[#8a8a8a] text-sm leading-5'>{content}</p>
            <div className='bg-[#3f4349] h-1 w-full rounded-3xl'></div>
        </div>
    </div>
  )
}

export default ServiceCard