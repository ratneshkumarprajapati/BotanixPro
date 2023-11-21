import React from 'react'
import SignUpForm from '../components/core/SignUpForm'
import signUpImg from "../assects/signup.jpg"

const SignUp = () => {
    return (
        <div className='w-full h-screen relative bg-richblack-800 flex gap-5 justify-center '>
            <div className='flex gap-5 justify-center w-11/12'>
                <section className='text-richblack-50 w-[50%]  pl-5 flex flex-col justify-center items-start translate-x-5'>
                    <p className='text-4xl'>Hii! 👋</p>
                    <p className='text-5xl font-bold mb-9 text-yellow-100'>Welcome to BotanixPro  </p>


                    <SignUpForm> </SignUpForm>


                </section>
                <section className='text-richblack-50 w-[50%] flex justify-center items-center relative '>
                    <img src={signUpImg} alt="" width={350} height={300} loading='lazy' className='z-20 -translate-x-3 -translate-y-4' />
                    <div className='bg-richblack-5  w-[350px] h-[500px] absolute z-10'></div>

                </section>
            </div>


        </div>
    )
}

export default SignUp
