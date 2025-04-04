import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaLinkedin } from 'react-icons/fa'
import MainButton from './MainButton'
import Logo from './Logo'

const Footer = () => {
  const [email, setEmail] = useState('') // State to track the email input
  const [message, setMessage] = useState('') // State to display success/error messages

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()

    if (!email.trim()) {
      setMessage('Please enter a valid email address.')
      return
    }

    // Simulate sending the email to a backend or API
    console.log('Newsletter subscription email:', email)

    // Reset the form and display a success message
    setEmail('')
    setMessage('Thank you for subscribing to our newsletter!')
  }

  return (
    <div className='flex justify-center items-center h-[40vh] w-screen bg-transparent'>
      <div className='flex justify-between pl-15 pr-45 w-full'>
        <div className='flex flex-col justify-center gap-y-10 text-[#8a8a8a]'>
          <h1 className='text-white text-3xl flex items-center gap-2'>
            <Logo className='w-7 h-7' fill='#FD6262' /> TRUTHWARE
          </h1>
          <div className='flex flex-col gap-y-3 text-xl'>
            <p>business@truthware.org</p>
            <p>160 Awolowo Road, Ikoyi, Lagos.</p>
          </div>
          <Link to='/privacypolicy' className='text-xl underline decoration-1'>
            Privacy Policy
          </Link>
        </div>
        <div className='flex flex-col gap-7'>
          <div className='flex flex-col gap-7 text-xl text-[#8a8a8a] '>
            <Link to='/solutions' className='hover:text-[#FD6262] transition duration-500 ease-in-out'>
              Solutions
            </Link>
            <Link to='/vision' className='hover:text-[#FD6262] transition duration-500 ease-in-out'>
              Visions
            </Link>
            <Link to='/blog' className='hover:text-[#FD6262] transition duration-500 ease-in-out'>
              Blog
            </Link>
          </div>
          <MainButton 
            to='/getstarted'
            name='Get Started' />
        </div>
        <div className='text-[#8a8a8a] flex flex-col gap-5 text-xl'>
          <p>Subscribe to Our Newsletter</p>
          <form onSubmit={handleNewsletterSubmit} className='flex flex-col gap-3'>
            <label className='text-lg'>Email *</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='border-1 border-[#8a8a8a] outline-none h-14 rounded-lg w-80 p-5'
              placeholder='Enter your email'
            />
            <button
              type='submit'
              className='border-1 border-[#8a8a8a] rounded-lg h-16 w-30 text-lg px-4 py-2 hover:bg-[#889ce7] hover:border-[#889ce7] hover:text-black transition duration-500'
            >
              Submit
            </button>
          </form>
          {message && <p className='text-sm text-green-500'>{message}</p>}
        </div>
        <div className='text-[#8a8a8a] flex flex-col gap-15 '>
          <div className='flex flex-col gap-3'>
            <p className='text-xl'>Follow Us On:</p>
            <div className='h-10 w-10 bg-[#8a8a8a] rounded-full flex justify-center items-center'>
              <a href='https://www.linkedin.com/'>
                <FaLinkedin className='w-10 h-10 bg-transparent text-black rounded-full' />
              </a>
            </div>
          </div>
          <p>© 2023 by Truthware.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer