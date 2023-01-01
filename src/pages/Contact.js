import React from 'react'
import ContactMain from '../components/Contact/ContactMain'

const Contact = () => {
  return (
    <>
      <div className='relative'>
      <img src='/images/heroBg.png' alt='initialImage' className='w-full h-[50vh] mb-0'/>
      <img src='/images/overlay-bottom.png' alt='' className='-mt-[3%] w-full h-auto'/>
      <div className='absolute top-[25%] left-[40%] font-montserrat'>
        <p className='text-primaryColor uppercase text-center my-5 text-7xl font-bold'>contact</p>
        <p className='text-white text-center italic text-5xl font-medium'>Home | Contact</p>
      </div>
      </div>
      <ContactMain/>
    </>
  )
}

export default Contact
