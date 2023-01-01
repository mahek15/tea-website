import React from 'react'
import AboutMain from '../components/About/AboutMain'
import ContactMain from '../components/Contact/ContactMain'
import ServiceMain from '../components/Service/ServiceMain'

const Home = () => {
  return (
    <>
        <div className='relative'>
            <img src='/images/heroBg.png' alt='' className='w-full h-[85vh]'/>
            <img src='/images/overlay-bottom.png' alt='bottom' className='w-full -mt-12 mb-0 '/>
        </div>
        <div className='absolute top-[30%] left-[40%] text-center justify-center font-montserrat'>
            <p className='text-primaryColor text-5xl font-bold my-3'>Been Serving</p>
            <p className='text-white text-7xl font-extrabold my-5'>CHAI</p>
            <p className='text-white text-6xl font-bold'>* Since 2017 *</p>
        </div>
      <AboutMain/>
      <ServiceMain/>
      <ContactMain/>
    </>
  )
}

export default Home