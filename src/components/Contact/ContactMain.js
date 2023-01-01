import React, { useState } from 'react'

const ContactMain = () => {
    const [userData,setUserData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    let name,value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    const submitData = async(event) =>{
        event.preventDefault();
        const {name, email, subject, message} = userData;
        if (name && email && subject && message){
        const res = fetch('https://chai-contact-default-rtdb.firebaseio.com/messagesRecord.json',
        {
            method: "POST",
            headers: {
                "content-Type" : "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                subject,
                message,
              }),
        }
    );

    if (res) {
        setUserData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    }
    else {
        alert("plz fill the data");
      }
    }

  return (
    <>
    <div className='bg-backgroundColor font-montserrat'>
        <div className='mx-auto my-0 w-4/5 text-center '>
            <div className='w-1 bg-primaryColor h-[200px] mx-auto mb-10 rounded-3xl'></div>
            <p className='text-primaryColor text-4xl tracking-widest uppercase font-bold'>Contact Us</p>
            <p className='text-5xl font-semibold my-5'>Feel free to Contact</p>
            <div className='flex mt-20'>
                <div className='mx-auto flex flex-col'>
                    <img src="/images/location.png" alt='location' className='w-16 h-auto mx-auto my-1'/>
                    <p className='text-3xl font-bold'>Location</p>
                    <p className='text-secondaryColor text-2xl font-light'>123 Street, Mumbai</p>
                </div>
                <div className='mx-auto flex flex-col'>
                    <img src="/images/call.png" alt='call' className='w-16 h-auto mx-auto my-1'/>
                    <p className='text-3xl font-bold'>Phone</p>
                    <p className='text-secondaryColor text-2xl font-light'>+012 345 6789</p>
                </div>
                <div className='mx-auto flex flex-col'>
                    <img src="/images/email.png" alt='mail' className='w-16 h-auto mx-auto my-1'/>
                    <p className='text-3xl font-bold'>Email</p>
                    <p className='text-secondaryColor text-2xl font-light'>info@example.com</p>
                </div>
            </div>
            <form className='flex flex-col space-y-4 text-center mt-20 w-3/5 mx-auto pb-20' method='POST'>
                <input placeholder='Your name' 
                type='text' 
                className='focus:outline-none border p-2 focus:border-primaryColor focus:border-2 text-secondaryColor font-light tracking-wider' 
                name='name'
                id=''
                value={userData.name}
                onChange={postUserData}/>
                <input placeholder='Your Email' 
                type='text' 
                className='focus:outline-none border p-2 focus:border-primaryColor focus:border-2 font-light tracking-wider'
                name='email'
                id=''
                value={userData.email}
                onChange={postUserData}/>
                <input placeholder='Subject' 
                type='text' 
                className='focus:outline-none border p-2 focus:border-primaryColor focus:border-2 font-light tracking-wider'
                name='subject'
                id=''
                value={userData.subject}
                onChange={postUserData}/>
                <input placeholder='Your Message' 
                type='text' 
                className='focus:outline-none border pt-2 px-2 pb-20 focus:border-primaryColor focus:border-2 font-light tracking-wider'
                name='message'
                id=''
                value={userData.message}
                onChange={postUserData}/>
                <button className='py-3 px-5 bg-primaryColor w-auto text-2xl text-secondaryColor font-medium mx-auto my-3' onClick={submitData}> SEND MESSAGE</button>
            </form>

        </div>
    </div>
    </>
  )
}

export default ContactMain
