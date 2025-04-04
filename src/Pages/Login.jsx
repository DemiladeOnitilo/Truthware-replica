import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate(-1) 
  }

  return (
    <div className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center text-white z-50'>
      <div className='relative w-[90%] max-w-md p-8 bg-gray-800 rounded-lg shadow-lg'>
        <button
          className='absolute top-4 right-4 text-gray-500 hover:text-gray-300 text-4xl font-bold cursor-pointer'
          onClick={handleClose}
        >
          &times;
        </button>

        <h1 className='text-3xl font-bold text-center mb-6'>Log In</h1>

        <div className='text-center mb-6'>
          <p className='text-gray-400'>New to the site?</p>
          <Link to="/signup" className='text-red-500 hover:underline'>
            Sign Up
          </Link>
        </div>

        <form className='flex flex-col gap-4'>
          <div className='flex flex-col gap-2'>
            <button className='bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition'>
              Log in with Google
            </button>
            <button className='bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition'>
              Log in with Facebook
            </button>
          </div>

          <div className='flex items-center gap-2 my-4'>
            <hr className='flex-grow border-gray-600' />
            <span className='text-gray-400'>or</span>
            <hr className='flex-grow border-gray-600' />
          </div>

          <div className='flex flex-col gap-2'>
            <label htmlFor="email" className='text-sm text-gray-300'>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className='w-full border border-gray-600 rounded-lg p-2 bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-500'
              placeholder="Enter your email"
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="password" className='text-sm text-gray-300'>
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className='w-full border border-gray-600 rounded-lg p-2 bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-500'
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className='bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition'
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login