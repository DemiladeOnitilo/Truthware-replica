import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet />
        <main className='mt-10 mb-20'>
          <Footer /> 
        </main>     
          
    </>
  )
}

export default MainLayout