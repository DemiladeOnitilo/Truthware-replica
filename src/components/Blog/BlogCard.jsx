import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThreeDotMenu from '../ThreeDotMenu'
import HeartIcon from '../HeartIcon'

const BlogCard = ({ date, readTime, img, title = '', info = '', views, to }) => {
  const [isLiked, setIsLiked] = useState(false)

  const slicedTitle = title.length > 71 ? title.slice(0, 71) + '...' : title
  const slicedInfo = info.length > 130 ? info.slice(0, 130) + '...' : info

  return (
    <div className='flex flex-col h-auto w-100 border border-gray-700 text-white'>
      <div className='h-80'>
        <Link to={to}>
          <img src={img} alt="" className='w-full h-full' />
        </Link>
      </div>
      <div className='flex flex-col p-8'>
        <div className='flex justify-between text-[#8a8a8a] text-sm mb-5'>
          <p>
            {date} · {readTime} min read
          </p>
          <div className='w-4 h-4'>
            <ThreeDotMenu />
          </div>
        </div>
        <div className='flex flex-col gap-3 w-[90%] cursor-pointer'>
          <Link to={to} className='text-xl text-white hover:text-[#FD6262]'>
            {slicedTitle}
          </Link>
          <p className='text-[#8a8a8a] text-md'>
            {slicedInfo}
          </p>
        </div>
        <div className='my-5 h-0.5 bg-[#8a8a8a]'></div>
        <div className='flex justify-between text-[#8a8a8a] text-sm'>
          <div className='flex gap-3'>
            <p>{views} views</p>
            <p>0 comments</p>
          </div>
          <div
            className='flex items-center gap-2 cursor-pointer'
            onClick={() => setIsLiked(!isLiked)}
          >
            <p>{isLiked ? '1' : '0'}</p>
            <HeartIcon fill={isLiked ? 'red' : 'none'} stroke="red" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogCard