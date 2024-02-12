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

    useEffect(() => {
        Aos.init();

    }, [])

    return (
        <div className='w-[100%]  lg:w-full    md:w-full  h-[100vh] relative'>
            <section className='w-[100%]   relative  h-[100vh] font-bold text-richblack-50 bg-richblack-800 '>
                <div className='w-[55%] hidden md:flex
                   h-[100%] absolute rounded-3xl top-5 right-0    '>
                    <img loading='lazy' src={hero1} alt="" className='w-[100%] h-[100%] object-cover ' />
                </div>
                <h2 className='absolute mb-5 top-[25%] left-[3%] w-[90%]  sm:text-[430%] text-6xl text-richblack-25 '>Explore More with <br />
                    <span className='text-caribbeangreen-1000 sm:text-[90%] text-5xl'>


                        <Typewriter
                            options={{
                                strings: ['Botanix Pro', 'Medicinal Plant classification', "Leaf Disease Detection", "SeedLing classification"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </span>
                </h2>


                <IconBtn
                    text="Explore More"
                    path="/about"
                    className={" px-7 py-5   absolute top-[70%] md:top[60%] left-[3%]  text-richblack-900 font-inter text-lg  "}


                >   </IconBtn>


            </section>

            <section className='w-[100%] overflow-hidden pt-[10rem] bg-richblack-800 flex flex-col justify-center items-center pb-[10rem]'>
                <h2 className='text-richblack-50 mx-auto text-5xl sm:text-[4.5rem] font-bold mb-10 ' data-aos="fade-down">Our Features</h2>

                <div className=' w-11/12 flex flex-col sm:gap-10 sm:flex-row justify-evenly items-start mt-24 '>


                    <div className=' sm:w-[50%] w-full   flex justify-evenly  items-center' data-aos="fade-right">
                        <div className='relative sm:w-[100%] w-full h-[30rem] '>
                            <img loading='lazy' src={img1} alt="img1" className='w-[100%] h-[100%] object-cover absolute top-0 left-0 rounded-md' />


                        </div>
                    </div>
                    <div className='sm:w-[50%] w-full flex justify-center mt-10 sm:mt-0 sm:block  '>
                        <div className='sm:w-[100%] w-full pl-5 sm:pl-0 text-xl font-inter text-richblack-50 flex flex-col justify-start' data-aos="fade-left">

                            <h2 className='text-[2rem] leading-10 font-semibold mb-10'>Medicinal Plant Classification</h2>
                            <p className='w-[100%]'>

                                Medicinal plant classification is a vital aspect of botany and pharmacology, encompassing the systematic categorization of plants based on their therapeutic properties and chemical constituents. <br />
                                Through classification, medicinal plants are organized into distinct groups, facilitating their study, cultivation, and utilization in healthcare practices...
                                <br />

                                <IconBtn
                                    text="Go"
                                    path="/about"
                                    className={" flex font-semibold sm:hidden  mt-2 px-10 py-2 ju  text-richblack-900 font-inter text-lg  "}


                                >   </IconBtn>
                            </p>
                        </div>

                    </div>
                </div>
                <div className=' w-11/12 flex  sm:gap-10 flex-col-reverse sm:flex-row justify-evenly items-start mt-24 '>


                    <div className='sm:w-[50%] w-full mt-10 sm:mt-0 '>
                        <div className='sm:w-[100%] w-full pl-5 sm:pl-14 text-xl font-inter text-richblack-50 flex flex-col justify-center' data-aos="fade-right">

                            <h2 className='text-[2rem] font-semibold leading-10 mb-10'> Leaf Disease Detection</h2>
                            <p className='w-[100%]'>
                                Leaf disease detection is a crucial application of image processing and machine learning in agriculture and plant pathology. It involves the identification and classification of diseases affecting plant foliage, such as fungal infections, viral diseases, and nutrient deficiencies, by analyzing images of leaves. <br />
                                Using techniques like image segmentation, feature extraction, and classification algorithms....
                                <IconBtn
                                    text="Go"
                                    path="/about"
                                    className={" flex font-semibold sm:hidden  mt-2 px-10 py-2 ju  text-richblack-900 font-inter text-lg  "}


                                >   </IconBtn>
                            </p>
                        </div>

                    </div>
                    <div className=' sm:w-[50%] w-full  flex justify-evenly items-center' data-aos="fade-left">
                        <div className='relative sm:w-[100%] w-full h-[30rem] '>
                            <img loading='lazy' src={leafD} alt="leafD" className='w-[100%] h-[100%] object-cover absolute top-0 left-0 rounded-md' />


                        </div>
                    </div>
                </div>
                <div className=' w-11/12 flex flex-col sm:gap-10 sm:flex-row justify-evenly items-start mt-24 '>


                    <div className='sm:w-[50%] w-full flex justify-evenly items-center' data-aos="fade-right">
                        <div className='relative sm:w-[100%] w-full h-[30rem] '>
                            <img loading='lazy' src={seedlink} alt="seedlink" className='w-[100%] h-[100%] object-cover absolute top-0 left-0 rounded-md' />


                        </div>
                    </div>
                    <div className='sm:w-[50%] w-full mt-10 sm:mt-0  ' data-aos="fade-left">
                        <div className='sm:w-[100%] w-full text-xl pl-5 sm:pl-0 font-inter text-richblack-50 flex flex-col justify-start'>

                            <h2 className='text-[2rem] font-semibold mb-10'> Seedling Classification</h2>
                            <p className='w-[100%]'>
                            </p>
                            Seedling classification is a fundamental task in plant science and agriculture, involving the categorization of seedlings into different species or varieties based on their morphological characteristics. <br />
                            This classification process plays a crucial role in various agricultural applications, including plant breeding, genetic studies, and crop management.....
                            <IconBtn
                                    text="Go"
                                    path="/about"
                                    className={" flex font-semibold sm:hidden  mt-2 px-10 py-2 ju  text-richblack-900 font-inter text-lg  "}


                                >   </IconBtn>
                        </div>

                    </div>
                </div>
            </section>
            <Subscriber></Subscriber>

            <Footer className={"sm:pt-[10rem] lg:pt-[15rem]  pt-10 bg-richblack-900"}></Footer>

        </div>
    )
}

export default Home
