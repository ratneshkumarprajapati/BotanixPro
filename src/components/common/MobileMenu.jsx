import React from 'react';
import { RxCross1 } from "react-icons/rx";
import { NavbarLinks } from '../../data/nav_links';
import { Link } from 'react-router-dom';

const MobileMenu = ({ handleClick }) => {


  return (
    <div className='w-full z-50 h-screen fixed inset-0 flex justify-center items-center sm:hidden'>
      <div className='z-[100] rounded-sm flex justify-center items-center  shadow-md backdrop-blur-xl opacity-[95%]   w-[45%] h-[30%] bg-brown-100'>
        <RxCross1 className='absolute right-2 top-2 text-richblack-800' onClick={handleClick}></RxCross1>
        <ul className='text-xl text-richblack-800 font-semibold '>
          {
            NavbarLinks.map((data,index)=>(
              <li key={index} onClick={handleClick}>
                <Link to={data.path}>
                  {data.title}
                </Link>

              </li>

            ))

          }
        </ul>






      </div>


    </div>
  )
}

export default MobileMenu
