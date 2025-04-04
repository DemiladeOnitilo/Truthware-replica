import React, { useState } from 'react'
import MainButton from '../components/MainButton'

const GetStarted = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    phone: '',
    jobtitle: '',
  })

  const [errors, setErrors] = useState({}) 
  const [submitted, setSubmitted] = useState(false) 

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    setErrors((prev) => ({
      ...prev,
      [name]: false, 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      if (!formData[key].trim()) {
        newErrors[key] = true
      }
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData)
      setSubmitted(true) 
      setTimeout(() => setSubmitted(false), 3000) 
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        company: '',
        phone: '',
        jobtitle: '',
      }) 
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <div className='relative h-[40vh] text-white flex items-center w-full mb-10'>
        <div
          className='absolute inset-0 bg-[url(https://img.freepik.com/free-photo/3d-futuristic-technology-background-with-flowing-data-waves_1048-17735.jpg?t=st=1743622447~exp=1743626047~hmac=442a157051b449855ea19436cc81ed90184dd350dc9f835ed5384736e2c17e64&w=826)] bg-no-repeat bg-cover bg-center opacity-20'
        ></div>
        <div className='relative flex flex-col justify-center gap-y-7 pl-20 w-[21%] mt-40'>
          <h1 className='text-5xl'>Get Started</h1>
          <p className='text-3xl text-[#8a8a8a]'>Let’s give your business what it needs to grow.</p>
        </div>
      </div>
      <div className='text-sm text-[#8a8a8a] border border-gray-700 flex justify-center items-center pl-20 h-[50vh] w-[95%] '>
        <div className='flex justify-center items-center w-[30%] border-r border-gray-700 h-full'>
          <h1 className='w-[40%]'>
            Get in touch to enhance your digital experience.
          </h1>
        </div>
        <div className='w-[70%] h-full flex justify-center items-center'>
          <form
            className='w-[40%] grid grid-cols-2 grid-rows-3 justify-items-center items-center gap-x-3 h-full p-10'
            onSubmit={handleSubmit}
          >
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className={`w-full border h-9 rounded-md outline-none p-5 ${
                  errors.firstname ? 'border-red-500' : 'border-gray-500'
                }`}
              />
            </div>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className={`w-full border h-9 rounded-md outline-none p-5 ${
                  errors.lastname ? 'border-red-500' : 'border-gray-500'
                }`}
              />
            </div>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full border h-9 rounded-md outline-none p-5 ${
                  errors.email ? 'border-red-500' : 'border-gray-500'
                }`}
              />
            </div>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="company">Company</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`w-full border h-9 rounded-md outline-none p-5 ${
                  errors.company ? 'border-red-500' : 'border-gray-500'
                }`}
              />
            </div>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full border h-9 rounded-md outline-none p-5 ${
                  errors.phone ? 'border-red-500' : 'border-gray-500'
                }`}
              />
            </div>
            <div className='w-full flex flex-col gap-2'>
              <label htmlFor="jobtitle">Job Title</label>
              <input
                type="text"
                name="jobtitle"
                value={formData.jobtitle}
                onChange={handleChange}
                className={`w-full border h-9 rounded-md outline-none p-5 ${
                  errors.jobtitle ? 'border-red-500' : 'border-gray-500'
                }`}
              />
            </div>
            <div className='w-full flex justify-center items-center col-span-2'>
              <button
                type="submit"
                className='text-black font-semibold w-full rounded-lg p-5 bg-red-400 text-center cursor-pointer hover:text-white hover:bg-black hover:border-1 hover:border-white hover:transition hover:duration-500 hover:ease-in-out'
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {submitted && (
        <div className='fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50'>
          Form submitted successfully!
        </div>
      )}
    </div>
  )
}

export default GetStarted