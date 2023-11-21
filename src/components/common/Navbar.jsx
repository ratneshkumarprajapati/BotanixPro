import React from 'react'
import { NavbarLinks } from '../../data/nav_links';
import logo from "../../assects/Logo.jpg";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { classificationList } from '../../data/classification_data';

const Navbar = () => {

    const { token } = useSelector((state) => state.auth)
    console.log(token)
    return (
        <div className='w-100% h-[5rem] bg-richblack-900'>

            <div className='w-11/12 flex justify-evenly items-center'>
                <div className=' h-[50%]   w-[150px] overflow-hidden rounded-sm'>
                    <Link to="/">
                        <img src={logo} alt="" className='scale-150 -translate-y-2' width={100} height={50} />
                    </Link>
                </div>

                <div className='text-richblack-25 flex justify-between items-center '>
                    {
                        NavbarLinks.map((data, i) => {

                            return (
                                <div key={i} className='flex '>

                                    {
                                        data?.title === "Classification" ? (
                                            <div className='relative group    '>
                                                <p className='text-richblack-25 mx-5 hover:text-yellow-100 text-xl transition-all duration-200 group  '>{data.title}</p>
                                                {/* list render */}

                                                <div className='absolute  hidden group-hover:flex  bg-richblack-25 w-[15rem]  justify-start   flex-col z-10 text-xl rounded-md '>

                                                    <div className='bg-richblack-900 w-full h-5'>

                                                    </div>
                                                    {
                                                        classificationList.map((data,index)=>(
                                                            <p className='text-richblack-900 border-b-2 hover:bg-yellow-100 p-4 font-semibold'>
                                                              <Link to={data?.cPath} key={index} >
                                                                {data?.cName}


                                                            </Link>
  
                                                            </p>
                                                            
                                                        ))
                                                    }

                                                </div>
                                                {

                                                }

                                            </div>
                                        )












                                            : (
                                                <Link to={data.path} key={i} className='text-richblack-25 mx-5 hover:text-yellow-100 text-xl transition-all duration-200 group  '>
                                                    {data.title}

                                                    <div className='w-[100%] h-1 group-hover:bg-yellow-100 transition-all duration-200 rounded-md pt-1'>

                                                    </div>

                                                </Link>

                                            )
                                    }



                                </div>







                            )






                        })


                    }
                </div>


                <div className='flex justify-between w-[10%] items-center'>

                    {/* login handle */}
                    <div className='border-2 px-2 py-1 border-richblack-500 rounded-md text-lg hover:bg-yellow-100 transition-all duration-200 text-richblack-50 hover:border-yellow-500 hover:text-richblack-900'>
                        {token === null && (
                            <Link to="/login">
                                <button className=''>
                                    Log in
                                </button>

                            </Link>
                        )







                        }
                    </div>

                    {/* sign up */}
                    <div className='border-2 px-2 py-1 border-richblack-500 rounded-md text-lg
                    hover:bg-yellow-100 hover:text-richblack-900  text-richblack-50 transition-all duration-300 hover:border-yellow-500'>
                        {
                            token === null && (
                                <Link to="/signup">
                                    <button >
                                        Sign Up
                                    </button>

                                </Link>
                            )
                        }
                    </div>

                </div>

            </div>


        </div >
    )
}

export default Navbar
