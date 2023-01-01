import React, { useState } from 'react'
import image from './images/heroBg.png';

const Footer = () => {
  const [mail,setMail] = useState('');

  return (
    <>
    <img src='/images/overlay-top.png' alt='' className='w-full h-auto -mb-[3%]'/>
      <div className='w-full h-auto items-center justify-center flex flex-col divide-y-2 bg-no-repeat bg-cover font-montserrat' style={{ backgroundImage:`url(${image})`  }}>
        <div className='grid grid-cols-4 text-white w-4/5 my-20'>
          <div className='flex flex-col'>
            <p className='uppercase text-bold text-3xl tracking-wider my-3'>get in touch</p>
            <div className='flex items-center my-3'>
              <img src='/images/locWhite.png' alt='location' className='w-6 h-auto'/>
              <p className='text-lg font-light ml-4'>123 Street, Mumbai</p>
            </div>
            <div className='flex items-center my-3'>
              <img src='/images/callWhite.png' alt='call' className='w-6 h-auto'/>
              <p className='text-lg font-light ml-4'>+012 345 6789</p>
            </div>
            <div className='flex items-center my-3'>
              <img src='/images/mailWhite.png' alt='mail' className='w-6 h-auto'/>
              <p className='text-lg font-light ml-4 mb-2'>info@example.com</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='uppercase text-bold text-3xl tracking-wider my-3'>FOLLOW US</p>
            <p className='font-light text-lg tracking-wide'>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
            <div className='flex justify-start my-5'>
            <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/twitter--v1.png" alt='' className='w-10 h-auto mr-2 '/>
            <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/facebook-new.png" alt='' className='w-10 h-auto mx-2 '/>
            <img src="https://img.icons8.com/material-outlined/24/FFFFFF/instagram-new--v1.png" alt='' className='w-10 h-auto mx-2 '/>
            <img src="https://img.icons8.com/ios-glyphs/30/FFFFFF/linkedin-2--v1.png" alt='' className='w-10 h-auto mx-2 '/>
            </div>
          </div>
          <div className='flex flex-col ml-3'>
            <p className='uppercase text-bold text-3xl tracking-wider my-3'>open hours</p>
            <p className='uppercase text-xl font-normal mb-2 tracking-wide'>monday - friday</p>
            <p className='text-xl font-light mb-3'>8.00 am - 8.00 pm</p>
            <p className='uppercase text-xl font-normal mb-2 tracking-wide'>Saturday - sunday</p>
            <p className='text-xl font-light mb-5'>2.00pm - 8.00pm</p>
          </div>
          <div className='flex flex-col mt-3'>
            <p className='uppercase text-bold text-3xl tracking-wider my-3'>newsletters</p>
            <p className='font-light text-lg'>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
            <div className='flex space-x-0 my-5'>
              <input placeholder='Your mail' className='p-3' type='text' value={mail} />
              <button className='bg-primaryColor text-secondaryColor p-3 text-xl font-medium'>Sign Up</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col text-white text-center'>
          <p className='text-2xl font-medium tracking-wide mt-7'>CopyRight © <span className='text-primaryColor'>Mahek</span>. All Rights Reserved</p>
          <p className='text-xl font-light tracking-wider mb-3 mt-2'>Made with Lovee</p>
        </div>        
      </div>
    </>
  )
}

export default Footer
