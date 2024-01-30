import React from 'react'
import './Sensors.css'
import Post from "./Post";
import Sidebar from './Sidebar';
import Button from '../Button';

export const MotionSen = () => {
  return (
    <div className='sensorsCollect'>
        <Sidebar/>
        
      <div className="content-container">
        <Button label="Write" onClick={() => console.log("Button clicked")} />
        <h1 className = "Title" id='motion'>MOTION SENSORS</h1>
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

