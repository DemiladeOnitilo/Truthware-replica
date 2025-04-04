import React, { useState, useEffect } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
  Outlet,
  useLocation
} from 'react-router-dom'

import MainLayout from './layout/MainLayout'
import Solutions from './Pages/Solutions'
import Vision from './Pages/Vision'
import Blog from './Pages/Blog'
import GetStarted from './Pages/GetStarted'
import Login from './Pages/Login'
import Home from './Pages/Home'
import BlogPost1 from './Pages/BlogPost1'
import BlogPost2 from './Pages/BlogPost2'
import BlogPost3 from './Pages/BlogPost3'
import SignUp from './Pages/SignUp'
import PrivacyPolicy from './Pages/PrivacyPolicy'

const TransitionWrapper = () => {
  const location = useLocation()
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    setIsTransitioning(true)
    const timer = setTimeout(() => setIsTransitioning(false), 700)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <div
      className={`transition-opacity duration-700 ${
        isTransitioning ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route element={<TransitionWrapper />}>
        <Route index element={<Home />} />
        <Route path='solutions' element={<Solutions />} />
        <Route path='vision' element={<Vision />} />
        <Route path='blog' element={<Blog />} />
        <Route path='getstarted' element={<GetStarted />} />
        <Route path='login' element={<Login />} />
        <Route path='blogpost1' element={<BlogPost1 />} />
        <Route path='blogpost2' element={<BlogPost2 />} />
        <Route path='blogpost3' element={<BlogPost3 />} />
        <Route path='signup' element={<SignUp />} />
        <Route path='privacypolicy' element={<PrivacyPolicy />} />
      </Route>
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App
