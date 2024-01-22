import React from 'react'
import './Resources.css'

import sensors from '../Resources/Assets/sensors.png'

export const Resources = () => {
  return (
    <div className='reso-collect'>
              <img src={sensors} alt="" className='sensorsimg'/>
            <div className='senpara'>
              <h3>Sensors : </h3>
              <br/>
              <p className='para'>The sensors section includes motion, temperature, light, proximity, gas, 
                  sound, image, and environmental sensors, each serving specific purposes 
                  in detecting movement, measuring temperature, gauging light levels, 
                  identifying nearby objects, monitoring gases, capturing sound, imaging, and 
                  assessing environmental factors like humidity.
              </p>
            </div>
            <div className='seemore'>
              <button>See more</button>
            </div>    
    </div>
  )
}
