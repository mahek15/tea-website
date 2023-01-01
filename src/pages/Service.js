import React from 'react'
import ServiceMain from '../components/Service/ServiceMain'
import image from '../components/images/heroBg.png';

const Service = () => {
  return (
    <div>
      <div className='w-full bg-no-repeat bg-cover h-[50vh] relative' style={{ backgroundImage:`url(${image})`  }}>
      <img src='/images/overlay-bottom.png' alt='' className=' w-full h-auto absolute top-[88%]'/>
      <div className='absolute top-[25%] left-[40%] font-montserrat'>
        <p className='text-primaryColor uppercase text-center my-5 text-7xl font-bold'>Services</p>
        <p className='text-white text-center italic text-5xl font-medium'>Home | Services</p>
      </div>
      </div>
      <ServiceMain/>
      
    </div>
  )
}

export default Service
