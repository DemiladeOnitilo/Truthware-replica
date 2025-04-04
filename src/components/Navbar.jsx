import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaCircleUser } from 'react-icons/fa6'
import Logo from './Logo'

const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(true)
    const [isScrolled, setIsScrolled] = useState(false)
    const lastScrollY = useRef(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
                setShowNavbar(false) 
            } else {
                setShowNavbar(true) 
            }

            setIsScrolled(currentScrollY > 0)
            lastScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const activeClass = ({ isActive }) =>
        isActive
            ? 'text-red-400'
            : 'text-white hover:text-red-400 transition duration-300 ease-in-out'

    return (
        <nav
            className={`${
                isScrolled ? 'bg-[#1b1a1a]' : 'bg-transparent'
            } text-white py-5 px-8 h-20 fixed top-0 left-0 w-full transition-transform duration-500 z-9999 ease-in-out ${
                showNavbar ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <div className='flex justify-between items-center'>
                <div className='text-3xl font-bold'>
                    <Link to='/' className='flex justify-center items-center text-center gap-2'><Logo className='w-7 h-7'/> TRUTHWARE</Link>
                </div>
                <div className='flex justify-center items-center text-sm gap-x-8'>
                    <NavLink className={activeClass} to='/solutions'>
                        Solutions
                    </NavLink>
                    <NavLink className={activeClass} to='/vision'>
                        Vision
                    </NavLink>
                    <NavLink className={activeClass} to='/blog'>
                        Blog
                    </NavLink>
                    <Link
                        to='/login'
                        className='flex items-center gap-3 text-red-400 hover:opacity-40 transition duration-300'
                    >
                        <FaCircleUser size={24} /> Log In
                    </Link>
                    <Link
                        to='/GetStarted'
                        className='border border-white rounded-lg px-4 py-2 hover:bg-[#889ce7] hover:border-[#889ce7] hover:text-black transition duration-500'
                    >
                        Get Started
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
