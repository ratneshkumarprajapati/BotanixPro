import React from 'react'

const LoginForm = () => {
  return (
    <div className='w-[70%]  '>
        <label className='text-xl block ' htmlFor="email">Email</label>
        <input 
        className='text-xl rounded-sm px-2 py-1 w-full mb-4'
        type="email"
        name='email'
        placeholder='Enter Your Email'
        id='email' />
      
        <label htmlFor="password" className='block text-xl'>Password</label>
        <input 
         className='text-xl rounded-sm px-2 py-1 w-full mb-4'
        type="password"
        name='password'
        placeholder='Enter Your Password'
        id='password' />

        <button className='text-richblack-900 mt-5 bg-yellow-100 w-full h-9 text-xl font-semibold rounded-md'>log in</button>
      
    </div>
  )
}

export default LoginForm
