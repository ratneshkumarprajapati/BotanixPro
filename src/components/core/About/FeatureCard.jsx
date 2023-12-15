import React from 'react';
import IconBtn from '../../common/IconBtn';
import { FaChevronRight } from "react-icons/fa";

const FeatureCard = ({imagePath,text,buttonText}) => {
  return (
    <>
       <div className='p-6  border-richblack-200 
        relative
         bg-richblack-800 border-solid border-2 rounded-md '>
          <div className='relative w-[100%] h-[25rem]'>
          <img src={imagePath} alt="" width={350} loading='lazy' className='w-[100%] h-[100%] object-cover absolute top-0 left-0 rounded-md' />

          </div>
          <p className='text-lg mt-3 text-richblack-25'>{text}</p>
          <IconBtn 
          text={buttonText}
          className={"text-richblack-900 mt-5 font-semibold px-6 text-center py-4 border border-yellow-500 absolute -bottom-4 left-1"}>
            <FaChevronRight />


          </IconBtn>

        </div>
    </>
  )
}

export default FeatureCard
