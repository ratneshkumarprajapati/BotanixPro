import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css"

import Typewriter from 'typewriter-effect';
import IconBtn from '../components/common/IconBtn';
// import plantC from "../assects/plant_classification.jpg";
// import hero from "../assects/hero.jpg";
import hero1 from "../assects/hero1.png"
import leafD from "../assects/leafD.jpg";
// import seedlink from "../assects/seedlink.jpg"
import img1 from "../assects/img1.jpg"
import seedlink from "../assects/img4.png"
import Footer from '../components/common/Footer';
import Subscriber from '../components/common/Subscriber';


const Home = () => {

    useEffect(()=>{
        Aos.init();

    },[])

    return (
        <div className='w-[100%] h-[100vh] relative'>
            <section className='w-[100%] relative  h-[100vh] font-bold text-richblack-50 bg-richblack-800 '>
                <div  className='w-[55%] h-[100%] absolute rounded-3xl top-5 right-0 '>
                    <img src={hero1} alt="" className='w-[100%] h-[100%] object-cover ' />
                </div>
                <h2 className='absolute top-[25%] left-[3%] w-[90%]  text-[430%] text-richblack-25 '>Explore More with <br />
                    <span className='text-caribbeangreen-1000 text-[90%]'>

                       
                        <Typewriter
                            options={{
                                strings: ['Botanix Pro', 'Medicinal Plant classification',"Leaf Disease Detection","SeedLing classification"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h2>


                <IconBtn
                    text="Explore More"
                    path="/signup"
                    className={"px-7 py-5 absolute top-[60%] left-[3%]  text-richblack-900 font-inter text-lg "}


                >   </IconBtn>


            </section>

            <section className='w-[100%] pt-[10rem] bg-richblack-800 flex flex-col justify-center items-center pb-[10rem]'>
                <h2 className='text-richblack-50 mx-auto text-[4.5rem] font-bold mb-10 ' data-aos="fade-down">Our Features</h2>

                <div className=' w-11/12 flex justify-evenly items-start mt-24 '>


                    <div className=' w-[50%]  flex justify-evenly items-center' data-aos="fade-right">
                        <div className='relative w-[70%] h-[30rem] '>
                            <img src={img1} alt="" className='w-[100%] h-[100%] object-cover absolute top-0 left-0 rounded-md' />


                        </div>
                    </div>
                    <div className='w-[50%] '>
                        <div className='w-[85%] text-xl font-inter text-richblack-50 flex flex-col justify-start' data-aos="fade-left">

                            <h2 className='text-[2rem] font-semibold mb-10'> Plant Classification</h2>
                            <p className='w-[100%]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus delectus iste eum, natus veritatis dolore aspernatur, quos quia possimus quo laborum enim consequatur reprehenderit. Amet qui nulla aspernatur ad. <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus delectus iste eum, natus veritatis dolore aspernatur, quos quia possimus quo laborum enim consequatur reprehenderit. Amet qui nulla aspernatur ad.
                            </p>
                        </div>

                    </div>
                </div>
                <div className=' w-11/12 flex justify-evenly items-start mt-24 '>


                    <div className='w-[50%] '>
                        <div className='w-[85%] text-xl font-inter text-richblack-50 flex flex-col justify-center' data-aos="fade-right">

                            <h2 className='text-[2rem] font-semibold mb-10'> Leaf Disease Detection</h2>
                            <p className='w-[100%]'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus delectus iste eum, natus veritatis dolore aspernatur, quos quia possimus quo laborum enim consequatur reprehenderit. Amet qui nulla aspernatur ad. <br />
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus delectus iste eum, natus veritatis dolore aspernatur, quos quia possimus quo laborum enim consequatur reprehenderit. Amet qui nulla aspernatur ad.
                            </p>
                        </div>

                    </div>
                    <div className=' w-[50%]  flex justify-evenly items-center' data-aos="fade-left">
                        <div className='relative w-[70%] h-[30rem] '>
                            <img src={leafD} alt="" className='w-[100%] h-[100%] object-cover absolute top-0 left-0 rounded-md' />


                        </div>
                    </div>
                </div>
                <div className=' w-11/12 flex justify-evenly items-start mt-24 '>


                    <div className=' w-[50%]  flex justify-evenly items-center' data-aos="fade-right">
                        <div className='relative w-[70%] h-[30rem] '>
                            <img src={seedlink} alt="" className='w-[100%] h-[100%] object-cover absolute top-0 left-0 rounded-md' />


                        </div>
                    </div>
                    <div className='w-[50%]  ' data-aos="fade-left">
                        <div className='w-[85%] text-xl font-inter text-richblack-50 flex flex-col justify-start'>

                            <h2 className='text-[2rem] font-semibold mb-10'> Seedlink Classification</h2>
                            <p className='w-[100%]'>
                            </p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus delectus iste eum, natus veritatis dolore aspernatur, quos quia possimus quo laborum enim consequatur reprehenderit. Amet qui nulla aspernatur ad. <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere necessitatibus delectus iste eum, natus veritatis dolore aspernatur, quos quia possimus quo laborum enim consequatur reprehenderit. Amet qui nulla aspernatur ad.
                        </div>

                    </div>
                </div>
            </section>
            <Subscriber></Subscriber>
           
            <Footer className={"pt-[20rem] bg-richblack-900"}></Footer>

        </div>
    )
}

export default Home
