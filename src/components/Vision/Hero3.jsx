import React from 'react'

const Hero3 = () => {
  return (
    <div className='relative h-[50vh] text-white flex items-center mb-10'>
      <div
        className='absolute inset-0 bg-[url(https://img.freepik.com/free-photo/3d-futuristic-technology-background-with-flowing-data-waves_1048-17735.jpg?t=st=1743622447~exp=1743626047~hmac=442a157051b449855ea19436cc81ed90184dd350dc9f835ed5384736e2c17e64&w=826)] bg-no-repeat bg-cover bg-center opacity-20'
      ></div>
      <div className='relative flex flex-col justify-center gap-y-7 pl-20 w-[38%] mt-40'>
        <h1 className='text-5xl'>Our Mission</h1>
        <p className='text-lg'>Our mission is to create a more equitable world by democratizing access to essential services. We believe that everyone should have access to 
            high-quality healthcare, education, finance, and lifestyle services, regardless of their background or location. Through the use of technology and innovative 
            business models, we aim to remove barriers and increase accessibility to these services. We are committed to driving social impact and creating positive change
            in the world, one service at a time.
        </p>
      </div>
    </div>
  )
}

export default Hero3