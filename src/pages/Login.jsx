import React from 'react';
import LoginForm from '../components/core/LoginForm';
import loginImg from '../assects/login.png'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='w-full h-[100vh] gap-10 flex   justify-center items-center bg-richblack-800'>

      <div className='w-11/12 flex flex-row-reverse justify-center items-center'>
        <section className='text-richblack-50 flex justify-start w-[50%]  flex-col'>
          <h1 className='text-5xl pb-5 font-bold font-inter '>Welcome Back</h1>
          <p className='text-3xl font-bold font-inter text-yellow-100 pb-10'>
            Login your Account
          </p>

          <LoginForm />

          <p className='mt-2 text-richblack-100'>New to our Platform? <Link className='underline' to="/signup"> Create Account</Link></p>

        </section>

        <section className='w-[50%] flex justify-center items-center'>
          <img src={loginImg} className='' width={300} alt="" />

        </section>
      </div>


    </div>
  )
}

export default Login
