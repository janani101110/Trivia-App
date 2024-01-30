import React from 'react'
import sensors from '../Assets/sensors.png'

const Post = () => {
  return (
    <div className="blog-post">
            <img src={sensors} alt="" className='blog-post img'/>
            <h3>Post Title 1</h3>
            <p>Content of the blog post...</p>
          </div>
  )
}

export default Post;
