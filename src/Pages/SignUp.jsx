import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate(-1) 
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center text-white z-50">
      <div className="relative w-[90%] max-w-md p-8 bg-gray-800 rounded-lg shadow-lg">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300 text-4xl font-bold cursor-pointer"
          onClick={handleClose}
        >
          &times;
        </button>

        <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>

        <div className="text-center mb-6">
          <p className="text-gray-400">Already have an account?</p>
          <Link to="/login" className="text-red-500 hover:underline">
            Log In
          </Link>
        </div>

        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-sm text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-sm text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              className="w-full border border-gray-600 rounded-lg p-2 bg-gray-700 text-white outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Confirm your password"
            />
          </div>

          <button
            type="submit"
            className="bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUp