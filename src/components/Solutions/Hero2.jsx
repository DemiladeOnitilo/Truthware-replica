import React from 'react'

const Hero2 = () => {
  return (
    <div className='relative h-[50vh] text-white flex items-center'>
      <div
        className='absolute inset-0 bg-[url(https://img.freepik.com/free-photo/3d-futuristic-technology-background-with-flowing-data-waves_1048-17735.jpg?t=st=1743622447~exp=1743626047~hmac=442a157051b449855ea19436cc81ed90184dd350dc9f835ed5384736e2c17e64&w=826)] bg-no-repeat bg-cover bg-center opacity-20'
      ></div>
      <div className='relative flex flex-col justify-center gap-y-15 pl-20 w-[40%] mt-15'>
        <h1 className='text-6xl'>Dive Into the New Age of Digital & Mobile Services</h1>
        <p className='text-2xl'>Our Services</p>
      </div>
    </div>
  )
}

export default Hero2