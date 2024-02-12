import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai";
import { Link } from 'react-router-dom';

const IconBtn = ({text,className,path}) => {
  return (
   
    <>
    <Link to={`${path}`}>
     <button className={`bg-yellow-25 flex justify-center items-center relative  hover:scale-95 transition-all duration-200 ${className}`}>
        {
            text
        }
        <AiOutlineArrowRight className='ml-2 '></AiOutlineArrowRight>

    </button>
    
    </Link>
   
    </>
  )
}

export default IconBtn
