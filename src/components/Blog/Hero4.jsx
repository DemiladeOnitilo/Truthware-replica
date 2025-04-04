import React from 'react'

const Hero4 = () => {
  return (
    <div className='relative h-[40vh] text-white flex items-center'>
      <div
        className='absolute inset-0 bg-[url(https://img.freepik.com/free-photo/3d-futuristic-technology-background-with-flowing-data-waves_1048-17735.jpg?t=st=1743622447~exp=1743626047~hmac=442a157051b449855ea19436cc81ed90184dd350dc9f835ed5384736e2c17e64&w=826)] bg-no-repeat bg-cover bg-center opacity-20'
      ></div>
      <div className='relative flex flex-col justify-center gap-y-7 pl-20 w-[38%]'>
        <h1 className='text-5xl'>Tech Impact Blog</h1>
      </div>
    </div>
  )
}

export default Hero4