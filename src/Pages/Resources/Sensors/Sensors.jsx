import React from 'react'
import './Sensors.css'
import Post from "./Post";
import Sidebar from '../Sidebar';

export const Sensors = () => {
  return (
    <div className='sensorsCollect'>
        <Sidebar/>
      <div className="content-container">
        <h1 className = "Title">SENSORS</h1>
        <div className="blog-posts-container">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
        </div>
          
      </div>
   </div>
  
  )
}
