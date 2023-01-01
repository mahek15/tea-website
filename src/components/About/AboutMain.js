import React from 'react'

const AboutMain = () => {
  return (
    <>
      <div className='bg-backgroundColor font-montserrat'>
        <div className='h-auto items-center justify-center flex flex-col w-4/5 mx-auto'>
          <div className='w-1 bg-primaryColor h-[200px] mx-auto mb-10 rounded-3xl'></div>
            <p className='text-primaryColor text-4xl tracking-widest uppercase font-bold'>About Us</p>
            <p className='text-5xl font-semibold my-5'>Serving Since 2017</p>
            <div className='flex my-5'>
              <div className='flex flex-col text-left w-4/5'>
                <p className='text-5xl font-medium text-secondaryColor my-3'>Our Story</p>
                <p className='text-secondaryColor font-normal tracking-wide text-2xl my-4'>
                  Eos kasd eos dolor vero vero, lorem stet diam rebum. Ipsum amet sed vero dolor sea
                </p>
                <p className='font-light tracking-wider text-paragraph text-2xl'>
                  Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Erat at est justo sit ut. Labor diam sed ipsum et eirmod
                </p>
                <button className='text-white bg-secondaryColor mx-auto py-3 px-5 uppercase text-xl font-medium my-6'>Learn More</button>
              </div>
              <img src='/images/about.png' alt='chaiiii' className='mb-20'/>
              <div className='flex flex-col text-left w-4/5'>
                <p className='text-5xl font-medium text-secondaryColor my-3'>Our Vision</p>
                <p className='font-light tracking-wider text-paragraph text-2xl'>
                  Takimata sed vero vero no sit sed, justo clita duo no duo amet et, nonumy kasd sed dolor eos diam lorem eirmod. Amet sit amet amet no. 
                </p>
                <div className='flex flex-col'>
                  <div className='flex items-center mt-4'>
                    <img src='/images/tick-mark.svg' alt='tick' className='mr-3 w-10 h-auto'/>
                    <p className='text-xl font-medium text-secondaryColor '>
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <div className='flex items-center mt-4'>
                    <img src='/images/tick-mark.svg' alt='tick' className='mr-3 w-10 h-auto'/>
                    <p className='text-xl font-medium text-secondaryColor '>
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                  <div className='flex items-center mt-4'>
                    <img src='/images/tick-mark.svg' alt='tick' className='mr-3 w-10 h-auto'/>
                    <p className='text-xl font-medium text-secondaryColor '>
                      Lorem ipsum dolor sit amet
                    </p>
                  </div>
                </div>
                <button className='text-secondaryColor bg-primaryColor mx-auto py-3 px-5 uppercase text-xl font-medium my-6'>Learn More</button>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default AboutMain
