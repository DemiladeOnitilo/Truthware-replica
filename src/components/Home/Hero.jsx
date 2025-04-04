import React from 'react'
import MainButton from '../MainButton'

const Hero = () => {
  return (
    <div className='bg-[url(https://img.freepik.com/free-vector/abstract-big-point-dark-backdrop-banner-presentation_1017-44777.jpg?t=st=1743168113~exp=1743171713~hmac=b15b765cbb2eaabe6826d0eb6af9cffa4d21f7e440cdcdf36ee5a3488d110e0f&w=1380)] 
     bg-cover bg-no-repeat bg-center h-[140vh] flex flex-col gap-10 px-15'>
      <div className='flex flex-col gap-10 mt-40'>
        <h1 className='text-white text-8xl w-[45%] leading-27'>
              Empowering Your Digital Transformation
          </h1>
          <p className='text-white text-4xl w-[30%]'>
              Enterprise solutions to enhance your business
          </p>
          <div className='w-35'>
            <MainButton 
              to='/solutions'
              name='Learn More'
          />
          </div>
          
      </div>
    </div> 
  )
}

export default Hero