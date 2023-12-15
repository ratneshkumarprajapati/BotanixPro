import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import aboutBg from "../assects/aboutbg.jpg";
import IconBtn from '../components/common/IconBtn';
import plantD from "../assects/plantDimg.jpeg"
import mediceneP from "../assects/mediceneP.webp"
import seedlink from "../assects/seedlingP.jpg";
import Footer from "../components/common/Footer"
import FeatureCard from '../components/core/About/FeatureCard';
import workingP from "../assects/workingP.png"

const About = () => {
  return (
    <div className='relative w-full flex min-h-screen flex-col justify-start items-center bg-richblack-800 '>
      <img src={aboutBg} alt="" className='absolute w-full h-full top-0 left-0 right-0 bottom-0 object-cover opacity-10 backdrop:blur-sm' />

      <h1 className='flex justify-start items-center gap-1 absolute left-2 top-2  text-xl text-richblack-50 '>
        <h2 className=''>About Our Application</h2>
        <FaChevronRight /></h1>
      <div className='w-11/12 flex flex-col justify-start items-start '>




        <section className=' mt-32'>
          <p className='text-4xl font-bold text  text-yellow-100 text-center'>
            Welcome to our Plant Health Monitoring System! Our application is dedicated to providing valuable insights into plant health, seedling growth, and medicinal plants.
          </p>

          <h3 className='text-3xl text-richblack-5 mt-10 mb-10'>Key Features</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 w-full gap-4  '>
            {/* <div className='p-6  border-richblack-200 
        relative
         bg-richblack-800 border-solid border-2 rounded-md '>
          <div className='relative w-[100%] h-[25rem]'>
          <img src={plantD} alt="" width={350} className='w-[100%] h-[100%] object-cover absolute top-0 left-0 rounded-md' />

          </div>
          <p className='text-lg mt-3 text-richblack-25'>Plant Disease Detection: Our advanced algorithms analyze images to identify and diagnose plant diseases accurately.</p>
          <IconBtn 
          text={"Plant Disease "}
          className={"text-richblack-900 mt-5 font-semibold px-6 text-center py-4 border border-yellow-500 absolute -bottom-5 left-1"}>
            <FaChevronRight />


          </IconBtn>

               </div> */}
            <FeatureCard imagePath={plantD} text={"Plant Disease Detection: Our advanced algorithms analyze images to identify and diagnose plant diseases accurately."} buttonText={"Plant Disease"} ></FeatureCard>
            {/* <div className='p-6  border-richblack-200 relative
         bg-richblack-800 border-solid border-2 rounded-md'>
          <div className='relative w-[100%] h-[25rem]'>
          <img src={mediceneP} alt="" width={350} className='w-[100%] h-[100%] object-cover absolute top-0 left-0 rounded-md' />

          </div>
          <p className='text-lg mt-3 text-richblack-25'>Medicinal Plant Information: Explore a comprehensive database of medicinal plants, including their uses and cultivation tips.</p>
          <IconBtn 
          text={"Plant Disease "}
          className={"text-richblack-900 mt-5 font-semibold px-6 text-center py-4 border border-yellow-500 absolute bottom-2 left-1"}>
            <FaChevronRight />


          </IconBtn>
              </div> */}
            <FeatureCard imagePath={mediceneP} text={"Medicinal Plant Information: Explore a comprehensive database of medicinal plants ...."} buttonText={"Medicinal Properties"}></FeatureCard>
            {/* <div className='p-6  border-richblack-200 relative
         bg-richblack-800 border-solid border-2 rounded-md'>
          
          <div className='relative w-[100%] h-[25rem]'>
          <img src={seedlink} alt="" width={350} className='w-[100%] h-[100%] object-cover absolute top-0 left-0 rounded-md' />

          </div>
          <p className='text-lg mt-3 text-richblack-25'>Seedling Monitoring: Keep track of seedling growth and receive recommendations for optimal care..</p>
          <IconBtn 
          text={"Medicinal Properties "}
          className={"text-richblack-900 mt-5 font-semibold px-6 text-center py-4 border border-yellow-500 absolute -bottom-5 left-1 "}>
            <FaChevronRight />


          </IconBtn>
              </div> */}

            <FeatureCard imagePath={seedlink} text={"Seedling Monitoring: Keep track of seedling growth and receive recommendations for optimal care.."} buttonText={"Seedling Classification"}></FeatureCard>


          </div>

          <h3 className='text-3xl text-richblack-5 mt-10 mb-10'>How It Works</h3>

          <section className='grid grid-cols-1 md:grid-cols-2 justify-start items-start gap-5 '>
            <div className='relative w-full  h-[35rem]'>

              <img src={workingP} alt="" className=' bg-richblack-5 w-full h-full rounded-lg absolute top-0 bottom-0 left-0  ' />
            </div>
            <p className='text-richblack-5 text-xl border-2 rounded-lg p-7 border-richblack-300'>
              Our system utilizes cutting-edge technologies to process images and data, providing users with real-time information about the health of their plants. <br />

              The web-based project features three machine learning models designed to enhance plant-related decision-making. Upon entering the home page, users can navigate to the "Classification" tab, where they are presented with three distinct options. <br /> <br /> The first option involves predicting plant diseases; users upload images of afflicted plant parts, and the system, powered by a machine learning model, provides predictions regarding the likelihood and type of disease. <br /> <br /> The second option focuses on the identification of medicinal plants; users submit images, and the model determines whether the plant possesses medicinal properties, displaying relevant information if applicable. <br /> <br /> The third option deals with seedling classification; users upload images of young plants, and the model categorizes them, presenting users with detailed information about the identified seedling. The results, showcasing predictions and information, are prominently displayed, creating a user-friendly interface.
            </p>
          </section>



          <h3 className='text-3xl text-richblack-5 mt-10'>Contact Us</h3>
          <div>

            <p className='text-richblack-5 text-xl mt-10'>
              Have questions or feedback? We'd love to hear from you! Reach out to us at


            </p>
            <IconBtn text={" Contact Us"}
              path={"/contactus"}
              className={"text-richblack-900 mt-5 font-semibold px-6 text-center py-4 border border-yellow-500"}>

            </IconBtn>
          </div>



        </section>



      </div>
      <div className='w-full mt-20 border-solid border-t-2 border-t-richblack-400'>

        <Footer className={"mt-[5rem] boder-t-2 border-t-richblack-100"}></Footer>
      </div>




    </div>
  )
}

export default About
