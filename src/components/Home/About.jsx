import React from 'react'
import MainButton from '../MainButton'

const About = () => {
  return (
    <div className=' flex justify-center items-center h-[90vh]'>
          <div className='flex justify-center bg-[#110f0f] items-center w-[95%] h-full '>
            <div className='w-[50%] bg-[url(https://img.freepik.com/free-vector/abstract-techno-background-with-flowing-particles-design_1048-14091.jpg?t=st=1743539102~exp=1743542702~hmac=5518cbf3f36f58e4d8d5516b1d460e3c4b6c4cf6a473dc91ce508e53b899917d&w=900)]
            bg-cover bg-no-repeat bg-center flex justify-center items-center text-center h-full border border-gray-500 p-45'>
              <h1 className='text-4xl text-white p-10'>Innovative Solutions. Unprecedented Capacity. Impeccable Reliability.</h1>
            </div>
            <div className='w-[50%] flex flex-col justify-center items-left gap-y-12 h-full border border-gray-500 border-opacity-50 lg:px-70'>
              <div className='flex flex-col justify-center items-center gap-y-12 text-[#8a8a8a] text-lg'>
                <p>               
                  We believe that innovation is the key to success in today's fast-paced business environment, 
                  and we are committed to delivering innovative solutions that help our clients stay ahead of the competition.
                </p>
                <p>
                  Our platforms are known to manage thousands of transactions per second and efficiently handle traffic spikes at high peaks. 
                  Our team of experienced professionals is committed to helping you streamline your operations, boost productivity, and reduce costs through the implementation of innovative technology.
                </p>
                <p>
                  At Truthware, we understand that reliability is key when it comes to the success of your business. 
                  That's why we are dedicated to providing you with the most reliable and effective solutions to help you achieve your business goals.
                </p>
              </div>
              <div className='w-35'>
                <MainButton 
                  to='/vision'
                  name='Learn More'
                />
              </div>
              
              
            </div>
          </div>
        </div>
  )
}

export default About