import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assects/Logo.jpg"
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiOutlineLinkedin } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";

import { footerLinks } from '../../data/footer_link';

const Footer = ({ className }) => {
  return (
    <>

      <footer className={`${className} w-[100%] relative flex flex-col justify-start items-center pb-[5rem] `}>

        <div className='w-11/12  grid grid-cols-3 grid-rows-1'>


          <div>
            <Link to="/">
              <img src={logo} alt="" className='' width={100} height={50} />
            </Link>

            <section className='text-richblack-50 flex justify-start items-center text-4xl gap-4 mt-9 transition-all duration-200'>
              <AiOutlineFacebook className='hover:text-blue-400  transition-all duration-200'></AiOutlineFacebook>
              <AiOutlineInstagram className='instagram transition-all duration-200'></AiOutlineInstagram>
              <FaXTwitter className='transition-all duration-200'></FaXTwitter>
              <AiOutlineLinkedin className='hover:text-blue-500 transition-all duration-200'></AiOutlineLinkedin>
              <FaDiscord className=' hover:text-blue-100 transition-all duration-200'></FaDiscord>
              <></>


            </section>


          </div>

          <div>
            {
              footerLinks.map((data, i) => (

                <Link to={data.link} key={i}>

                  <p className='text-richblack-50 text-2xl hover:text-blue-300 transition-all duration-200 mb-3 '>
                    {data.title}

                  </p>
                </Link>


              ))
            }





          </div >

          <div>

            <div class="map -translate-x-10" >
              <iframe
              title='this is title'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4164.446540441168!2d77.44541145573622!3d28.633712993960966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee3d4e3485ed%3A0xe0fe1689b57c7d2e!2sABESIT%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1668004186387!5m2!1sen!2sin"
                width="450" height="400" style={{ border: "0" }} allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>


          </div>
        </div>

       <div className='w-11/12 flex justify-center h-1 bg-richblack-100 mt-16 '>

       </div>

       <div className='text-richblack-200 text-xl'>
        All Right are reserved 2023
       </div>








      </footer>




    </>
  )
}

export default Footer
