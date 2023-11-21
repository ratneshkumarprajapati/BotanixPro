import React from 'react'
import contactUsImg from "../assects/contactImg.png"
import ContactUsForm from '../components/core/ContactUsForm'

const ContactUs = () => {
  return (
    <div className='w-full h-screen bg-richblack-800 flex justify-center items-center '>
        <div className='w-11/12 flex justify-center items-center '>
            <section className='w-[50%] flex justify-center items-center'>
                <img src={contactUsImg} alt="" width={600} />

            </section>
            <section className='w-[50%]'>
                <p className='text-yellow-200 text-5xl font-bold '>feel free to </p>
                <p className='text-richblack-25 text-6xl font-bold '>Contact Us </p>
                <ContactUsForm></ContactUsForm>

            </section>

        </div>
      
    </div>
  )
}

export default ContactUs
