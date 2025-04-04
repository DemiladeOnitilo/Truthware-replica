import React from 'react'
import Hero3 from '../components/Vision/Hero3'

const Vision = () => {
  return (
    <div>
      <Hero3 />
      <div className='h-auto w-screen flex justify-center text-white'>
        <div className='w-[90%] flex flex-col'>

          <div className='flex border border-gray-700 h-150'>
            <div className='w-[40%] relative border-r border-gray-700 flex justify-center items-center text-center'>
              <div className='absolute inset-0 opacity-40 bg-[url(https://img.freepik.com/free-photo/3d-render-abstract-background-with-digital-cyber-particles-design_1048-13025.jpg?t=st=1743630924~exp=1743634524~hmac=59a5947b2b5d1663652be292cedd33ef6598090c8e1df863811aee5d487ce481&w=826)]
              bg-no-repeat bg-cover'></div>
              <h1 className='text-3xl' >Our Story</h1>
            </div>
            <div className='text-[#8a8a8a] flex justify-center items-center text-sm w-[60%]'>
              <div className='flex flex-col  gap-y-9 w-[40%]'>
                <p>              
                  Truthware was founded in 2016 with a mission to provide innovative and customized technology solutions to businesses of all sizes. 
                  We started small, with just a handful of employees and a shared passion for technology and innovation.
                  From the beginning, our focus has been on building long-term relationships with our clients. 
                  We understand that every business has unique technology needs and challenges, and we are committed to working closely with our 
                  clients to develop tailored solutions that meet their specific objectives.
                </p>
                <p>
                  Over the years, we have had the privilege of working with businesses across a wide range of industries, from telecommunications 
                  to healthcare to finance to transportation and insurance. We have helped our clients streamline their operations,
                  improve their security, and leverage technology to achieve their business goals.
                </p>
                <p>
                  As we look to the future, we remain committed to our mission of providing exceptional IT services and building
                  long-term relationships with our clients. We are excited about the opportunities that technology presents and are dedicated to helping 
                  businesses of all sizes thrive in the digital age.
                </p>
              </div>
            </div>
          </div>
          
          <div className='flex border border-gray-700 h-160'>
            <div className='w-[60%] border-r border-gray-700 flex justify-center text-[#8a8a8a]'>
              <div className='flex flex-col gap-y-9 w-[40%] p-10'>
                <p>
                  We understand that a business's technology needs are unique and complex. That's why we are proud to offer 
                  experienced leadership to guide you through every aspect of your IT journey.
                </p>
                <p>
                  Our leadership team is composed of seasoned IT professionals who bring years of experience to the table. They have worked with a wide range 
                  of businesses, from small startups to large enterprises, and understand the intricacies and challenges of managing technology in today's fast-paced environment.
                </p>
                <p>
                  Our leaders are passionate about technology and are committed to staying up-to-date with the latest trends and innovations. They work closely with our clients to 
                  develop tailored solutions that meet their specific needs and objectives. They understand that technology is not a one-size-fits-all solution and that every business 
                  requires a unique approach.
                </p>
              </div>
            </div>
            <div className='relative w-[40%] flex justify-center items-center text-center'>
                <div className='absolute inset-0 opacity-40 bg-[url(https://img.freepik.com/free-photo/abstract-background-from-brilliant-mosaic-pattern-generative-ai_169016-30233.jpg?t=st=1743632016~exp=1743635616~hmac=feb4548ae2f71fffa0587937ad8308f5598de365f9182bf45d9a561ac62abab3&w=1380)]
                bg-no-repeat bg-cover'></div>
                <h1 className='text-3xl w-[40%]'>Experienced Leadership</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision