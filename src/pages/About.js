import React from 'react'
import AboutMain from '../components/About/AboutMain'

const About = () => {
  return (
    <>
    <div className='relative'>
      <img src='/images/heroBg.png' alt='initialImage' className='w-full h-[50vh] bg-cover'/>
      <img src='/images/overlay-bottom.png' alt='' className='-mt-[3%] w-full h-auto'/>
      <div className='absolute top-[25%] left-[40%] font-montserrat'>
        <p className='text-primaryColor uppercase text-center my-5 text-7xl font-bold'>about us</p>
        <p className='text-white text-center italic text-5xl font-medium'>Home | About</p>
      </div>
      </div>
      <AboutMain/>
    </>
  )
}

export default About
