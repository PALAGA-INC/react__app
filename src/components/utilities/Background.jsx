import React from 'react'

import leftbg from '../assets/images/leftbg.svg'
import rightbg from '../assets/images/rightbg.svg'
import bg from '../assets/images/bg.svg'


const Background = () => {
  return (
    <div className='background'>
        <img src={bg} alt="bg" className='bg'/>
        <img src={leftbg} alt="leftbg" className="leftbg" />
        <img src={rightbg} alt="rightb" className="rightbg"/>
    </div>
  )
}

export default Background