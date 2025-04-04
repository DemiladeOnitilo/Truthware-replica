import React, { useState } from 'react'
import MainButton from '../MainButton'
import ReactPlayer from 'react-player'
import { FaPlay, FaPause } from 'react-icons/fa'
import video from '../../assets/video.mp4'

const GetStarted = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="flex justify-center items-center h-[90vh] ">
      <div className="flex justify-center items-center w-[95%] h-full  ">
        <div className="w-[60%] bg-[url(https://img.freepik.com/free-vector/network-communications-with-flowing-cyber-dots-design_1048-13962.jpg)] 
          bg-cover bg-no-repeat border border-gray-500 h-full flex justify-center items-center relative">
          <ReactPlayer
            url={video} 
            playing={isPlaying}
            controls={false}
            loop
            muted
            width="70%"
            height="70%"
            style={{
              position: 'absolute',
              top: 130,
              left: 150,
              zIndex: 1,
              opacity: 0.8, 
            }}
          />
          <h1 className="text-4xl absolute text-center z-99 w-[45%] text-white">
            Are You Ready to Accelerate Your Business?
          </h1>

          {isPlaying && (
            <button
              onClick={togglePlayPause}
              className="z-89 bg-[#889CE7] flex justify-center items-center text-black h-30 w-30 p-5 rounded-full hover:bg-gray-700"
            >
              <FaPause className="h-10 w-10" />
            </button>
          )}
          {!isPlaying && (
            <button
              onClick={togglePlayPause}
              className="z-89 bg-[#889CE7] flex justify-center items-center text-black h-30 w-30 p-5 rounded-full hover:bg-gray-700"
            >
              <FaPlay className="h-10 w-10" />
            </button>
          )}
          
        </div>
        <div className="w-[40%] border border-gray-500 h-full flex flex-col justify-center items-center text-left ">
            <div className='flex flex-col justify-center items-left w-[40%] gap-y-5'>
                <p className="text-lg text-[#8a8a8a]">
                    Get in touch to enhance your digital experience.
                </p>
                <div className='w-35'>
                  <MainButton 
                    to='/getstarted'
                    name="Get Started" 
                  />
                </div>
                
            </div>
          
        </div>
      </div>
    </div>
  )
}

export default GetStarted