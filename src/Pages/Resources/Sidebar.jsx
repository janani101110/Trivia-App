import React from 'react'
import { Link } from 'react-router-dom';

export const Sidebar = () => {
  return (
    <div className='sidebar'>
          <table>
          <thead>
            <tr>
              <th>All Categories</th>
            </tr>
          </thead>
          <tbody>
           <tr>
              <Link to='/MotionSen' className="nav"><td>Motion Sensors</td></Link>
            </tr>
           <tr>
              <Link to='/MotionSen' className="nav"><td>Temperature Sensors</td></Link>
            </tr>
            <tr>
              <Link to='/MotionSen' className="nav"><td>Light Sensors</td></Link>
            </tr>
            <tr>
            <Link to='/MotionSen' className="nav"><td>Proximity Sensors</td></Link>
            </tr>
            <tr>
            <Link to='/MotionSen' className="nav"><td>Gas Sensors</td></Link>
            </tr>
            <tr>
            <Link to='/MotionSen' className="nav"><td>Sound Sensors</td></Link>
            </tr>
            <tr>
            <Link to='/MotionSen' className="nav"><td>Image Sensors/Cameras</td></Link>
            </tr>
            <tr>
            <Link to='/MotionSen' className="nav"><td>Environmental Sensors</td></Link>
            </tr>
          </tbody>
        </table>
        </div>
  )
}

export default Sidebar;