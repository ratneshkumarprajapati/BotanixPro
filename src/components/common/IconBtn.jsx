import React from 'react'
import {AiOutlineArrowRight} from "react-icons/ai";
import { Link } from 'react-router-dom';

const IconBtn = ({text,className,path}) => {
  return (
   
    <>
    <Link to={`${path}`}>
     <button className={`bg-yellow-25 relative hover:scale-95 transition-all duration-200 ${className}`}>
        {
            text
        }
        <AiOutlineArrowRight className='absolute top-6 right-1'></AiOutlineArrowRight>

    </button>
    
    </Link>
   
    </>
  )
}

export default IconBtn
