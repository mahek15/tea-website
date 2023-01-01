import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <>
        <nav className='w-full sticky bg-secondaryColor text-white font-montserrat'>
            <div className='justify-between mx-[10%] flex my-auto py-4 sticky'>
                <div className='text-center flex '>
                <img src="/images/teaLogo.png" alt='logo' className='mr-3 w-[53px] h-auto'/>
                    <p className='text-5xl font-bold my-auto text-primaryColor align-middle'>CHAIII</p>
                </div>
                <div className='flex'>
                <ul className="flex space-x-16 text-3xl font-medium ">
                    <li>
                        <Link to="/" className='hover:text-primaryColor align-middle'>Home </Link>
                    </li>
                    <li>
                        <Link to="/about" className='hover:text-primaryColor align-middle'>About</Link>
                    </li>
                    <li>
                        <Link to="/service" className='hover:text-primaryColor align-middle'>Service</Link>
                    </li>
                    <li>
                        <Link to='/contact' className='hover:text-primaryColor align-middle'>Contact Us</Link> 
                    </li>
                </ul>
                </div>
            </div>
        </nav>   
    </>
  )
}

export default Navbar