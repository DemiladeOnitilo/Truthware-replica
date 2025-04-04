import React, { useState } from 'react'
import ThreeDotMenu from '../components/ThreeDotMenu'
import { blogInfo } from '../components/BlogInfo'
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa6'
import HeartIcon from '../components/HeartIcon'
import { Link } from 'react-router-dom'

const BlogPost2 = () => {
  const thirdBlog = blogInfo[2]
  const [likedBlogs, setLikedBlogs] = useState({})
  const [comment, setComment] = useState('') 
  const [comments, setComments] = useState([]) 
  const [showPopup, setShowPopup] = useState(false) 


  const toggleLike = (id) => {
    setLikedBlogs((prev) => ({
      ...prev,
      [id]: !prev[id], 
    }))
  }

  const handleCommentSubmit = () => {
    if (comment.trim() === '') return 
    setComments((prev) => [...prev, comment]) 
    setComment('') 
    setShowPopup(true)

    setTimeout(() => {
      setShowPopup(false)
    }, 2000)
  }

  const paragraphs1 = thirdBlog.info1.split('. ').map((sentence, index) => sentence.trim() + (index < thirdBlog.info1.split('. ').length - 1 ? '.' : ''))
  const paragraphs2 = thirdBlog.info2.split('. ').map((sentence, index) => sentence.trim() + (index < thirdBlog.info2.split('. ').length - 1 ? '.' : ''))
  const paragraphs3 = thirdBlog.info3.split('. ').map((sentence, index) => sentence.trim() + (index < thirdBlog.info3.split('. ').length - 1 ? '.' : ''))

  const otherBlogs = blogInfo.filter((blog) => blog.id !== thirdBlog.id)

  return (
    <div className='flex flex-col items-center'>
      <div className='relative h-[40vh] text-white flex justify-center items-center w-full'>
        <div className='absolute inset-0 bg-[url(https://img.freepik.com/free-photo/3d-futuristic-technology-background-with-flowing-data-waves_1048-17735.jpg?t=st=1743622447~exp=1743626047~hmac=442a157051b449855ea19436cc81ed90184dd350dc9f835ed5384736e2c17e64&w=826)] bg-no-repeat bg-cover bg-center opacity-20'></div>
      </div>

      <div className='flex justify-center -translate-y-65 items-center w-[40%] bg-black h-auto p-5 text-white'>
        <div className='flex flex-col gap-3 border border-gray-700 w-full h-full px-15 py-9'>
          <div className='flex justify-between text-[#8a8a8a] text-sm mb-5'>
            <p>
              {thirdBlog.date} · {thirdBlog.readTime} min read
            </p>
            <div className='w-4 h-4'>
              <ThreeDotMenu />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h1 className='text-5xl'>{thirdBlog.title}</h1>
            {paragraphs1.map((paragraph1, index) => (
              <p key={index} className='text-[#8a8a8a] text-sm'>
                {paragraph1}
              </p>
            ))}
          </div>
          <div className='w-full'>
            <img src={thirdBlog.img1} alt="" className='w-full' />
            <p className='text-sm italic text-[#8a8a8a]'>{thirdBlog.photoMembers1}</p>
          </div>
          <div className='flex flex-col gap-3'>
            {paragraphs2.map((paragraph2, index) => (
              <p key={index} className='text-[#8a8a8a] text-sm'>
                {paragraph2}
              </p>
            ))}
          </div>
          <div className='w-full'>
            <img src={thirdBlog.img2} alt="" className='w-full' />
            <p className='text-sm italic text-[#8a8a8a]'>{thirdBlog.photoMembers2}</p>
          </div>
          <div className='flex flex-col gap-3'>
            {paragraphs3.map((paragraph3, index) => (
              <p key={index} className='text-[#8a8a8a] text-sm'>
                {paragraph3}
              </p>
            ))}
          </div>
          <div className='my-5 h-0.5 bg-gray-700'></div>
          <div className='flex gap-5 text-[#8a8a8a]'>
            <a href='https://www.facebook.com/' className='hover:text-[#889ce7]'>
              <FaFacebook />
            </a>
            <a href='https://x.com/' className='hover:text-[#889ce7]'>
              <FaTwitter />
            </a>
            <a href='https://www.linkedin.com/' className='hover:text-[#889ce7]'>
              <FaLinkedin />
            </a>
          </div>
          <div className='my-5 h-0.5 bg-gray-700'></div>
          <div className='flex justify-between text-[#8a8a8a] text-sm'>
            <div className='flex gap-3'>
              <p>
                {thirdBlog.views} views
              </p>
              <p>
                0 comments
              </p>
            </div>
            <div
              className='flex items-center gap-2 cursor-pointer'
              onClick={() => toggleLike(thirdBlog.id)}
            >
              <p>{likedBlogs[thirdBlog.id] ? '1' : '0'}</p>
              <HeartIcon fill={likedBlogs[thirdBlog.id] ? 'red' : 'none'} stroke="red" />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col gap-5 text-[#8a8a8a] -translate-y-65 w-[38%]'>
        <div className='flex justify-between w-full'>
          <p>Recent Posts</p>
          <Link to='/blog' className='underline decoration-1'>See All</Link>
        </div>
        <div className='flex gap-5 w-full'>
          {otherBlogs.map((blog) => (
            <div key={blog.id} className='flex flex-col border border-gray-700 w-[35%]'>
                <div>
                    <Link to={blog.to}>
                        <img src={blog.img1} alt={blog.title} className='w-full h-40 object-cover cursor-pointer' />
                    </Link>
                </div>
                <div className='p-3 flex flex-col gap-3'>
                <div> 
                    <Link to={blog.to} className='text-sm text-white hover:text-[#FD6262]'>
                        {blog.title.length > 50 ? blog.title.slice(0, 46) + '...' : blog.title}
                    </Link>
                </div>
                <div className='h-0.5 bg-gray-700 '></div>
                <div className='flex justify-between text-[#8a8a8a] text-sm '>
                    <div className='flex gap-3'>
                        <p>
                            {blog.views} views
                        </p>
                        <p>
                            0 comments
                        </p>
                    </div>
                    <div
                    className='flex items-center gap-2 cursor-pointer'
                    onClick={() => toggleLike(blog.id)}
                  >
                    <p>{likedBlogs[blog.id] ? '1' : '0'}</p>
                    <HeartIcon fill={likedBlogs[blog.id] ? 'red' : 'none'} stroke="red" />
                  </div>
                </div>
                </div>
                
            </div>
          ))}
        </div>
        <div className='flex flex-col gap-10 border border-gray-700 text-[#8a8a8a] w-full h-auto p-10'>
                    <h1>Comments</h1>
                    <div className='h-0.5 bg-gray-700'></div>
                        <div className='w-full'>
                        <input
                            type="text"
                            placeholder='Write a comment...'
                            value={comment}
                            onChange={(e) => setComment(e.target.value)} 
                            className='border border-gray-700 h-12 p-2 w-full'
                        />
                        <div className='text-sm flex justify-between items-center text-[#8a8a8a] mt-5'>
                            <div className='flex gap-2'>
                                <Link to='/login' className='text-[#FD6262] hover:underline hover:decoration-1'>Log in</Link>
                                <p>to publish as a member</p>
                            </div>
                            <div className='flex gap-3'>
                                <div
                                    className='text-[#FD6262] flex items-center gap-2 cursor-pointer hover:underline hover:decoration-1'
                                    onClick={() => setComment('')} 
                                >
                                    <p>Cancel</p>
                                </div>
                                <div
                                    className='text-black bg-[#FD6262] h-7 w-20 flex justify-center items-center gap-2 cursor-pointer hover:underline hover:decoration-1'
                                    onClick={handleCommentSubmit} 
                                >
                                    <p>Publish</p>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
      </div>
      {showPopup && (
            <div
                className='fixed top-0 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50'
                style={{ marginTop: '100px' }} 
            >
                Comment submitted successfully!
            </div>
        )}
    </div>
  )
}

export default BlogPost2