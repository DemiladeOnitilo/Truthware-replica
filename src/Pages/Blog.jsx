import React from 'react'
import Hero4 from '../components/Blog/Hero4'
import BlogCard from '../components/Blog/BlogCard'
import { blogInfo } from '../components/BlogInfo'

const Blog = () => {
  return (
    <div>
      <Hero4 />
      <div className='flex gap-10 pl-20 -translate-y-20 h-[70vh]'>
        {blogInfo.map((blog, index) =>(
            <BlogCard 
              key={index}
              id={blog.id}
              title={blog.title}
              img={blog.img1}
              info={blog.info1}
              date={blog.date}
              readTime={blog.readTime}
              views={blog.views}
              to={blog.to}
            />
))}
      </div>
    </div>
  )
}

export default Blog