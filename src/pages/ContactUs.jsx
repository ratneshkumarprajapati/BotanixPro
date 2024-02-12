import React from 'react'
import contactUsImg from "../assects/contactImg.png"
import ContactUsForm from '../components/core/ContactUsForm';
import Footer from '../components/common/Footer';

const ContactUs = () => {
  return (
    <div className='w-full  bg-richblack-800 flex flex-col gap-10 justify-center items-center '>
      <div className='sm:w-11/12 w-full mt-5 sm:mt-0 flex  justify-center items-center '>
        <section className='hidden  md:flex md:w-[50%]  justify-center items-center'>
          <img src={contactUsImg} alt="" width={600} />

        </section>
        <section className='md:w-[50%] w-full flex justify-center flex-col mx-5 sm:ml-16 md:ml-0'>
          <p className='text-yellow-200 text-5xl font-bold '>feel free to </p>
          <p className='text-richblack-25 text-6xl font-bold '>Contact Us </p>
          <ContactUsForm></ContactUsForm>

        </section>


      </div>
      <div className='w-full border-t-2 pt-5 lg:pt-16 border-t-richblack-300'>

        <Footer></Footer>
      </div>

    </div>
  )
}

export default ContactUs
