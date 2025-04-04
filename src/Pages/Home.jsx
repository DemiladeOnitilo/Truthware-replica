import React from 'react'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import About from '../components/Home/About'
import Numbers from '../components/Home/Numbers'
import Clients from '../components/Home/Clients'
import GetStarted from '../components/Home/GetStarted'

const Home = () => {
  return (
    <div className='flex flex-col gap-y-30'>
        <Hero />          
        <Services /> 
        <About />
        <Numbers />
        <Clients />
        <GetStarted />
    </div>
  )
}

export default Home