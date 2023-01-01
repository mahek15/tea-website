import React from 'react'

const ServiceMain = () => {
    const data = [
        {
            id: 1,
            image: '/images/service01.jpg',
            logo: '/images/logo01.png',
            speciality: 'Pleasing Aroma ',
        },
        {
            id: 2,
            image: '/images/service02.jpg',
            logo: '/images/logo02.png',
            speciality: 'Variety available',
        },
        {
            id: 3,
            image: '/images/service03.jpg',
            logo: '/images/logo03.png',
            speciality: 'Fresh Tea Leaves',
        },
        {
            id: 4,
            image: '/images/service04.jpg',
            logo: '/images/logo04.png',
            speciality: 'Best Quality Tea',
        },
    ]
  return (
    <>
      <div className='bg-backgroundColor font-montserrat'>
        <div className='h-auto items-center justify-center flex flex-col'>
            <div className='w-1 bg-primaryColor h-[200px] mx-auto mb-10 rounded-3xl'></div>
            <p className='text-primaryColor text-4xl tracking-widest uppercase font-bold'>Our services</p>
            <p className='text-5xl font-semibold my-5'>Satisfying and Hearty Tea</p>
            <div className='grid grid-cols-2 w-4/5 container gap-3 mx-auto my-20'>
                {
                    data.map((user) => (
                        <div className='flex m-3'>
                            <img src={user.image} alt='' className='w-[40%] h-auto bg-cover rounded-sm'/>
                            <div className='flex flex-col ml-6'>
                                <div className='flex items-center'>
                                    <img className = 'w-12 h-12 mr-3 bg-primaryColor p-[8px] rounded-full' alt = 'logo' src = {user.logo}/>
                                    <p className='text-secondaryColor font-semibold text-3xl py-4'>{user.speciality}</p>
                                </div>
                                <p className='text-paragraph font-light tracking-wider text-xl'>Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </>
  )
}

export default ServiceMain
