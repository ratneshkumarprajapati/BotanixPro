import React from 'react'
import { useForm } from "react-hook-form";
import {useDispatch} from "react-redux";
import { setSignUpData } from '../../Slices/authSlice';
import { sendOtp } from '../../services/operations/authApi';
import {useNavigate} from "react-router-dom"

const SignUpForm = () => {

    const dispatch =useDispatch();
    const navigate=useNavigate()
    const {
        handleSubmit,
        register,
        setValue,
        reset,
        formState: { errors }
    } = useForm()

    const onSubmit=(data)=>{
        console.log(data);
        dispatch(setSignUpData(data))

        dispatch(sendOtp(data?.email,navigate))





    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-[80%] flex flex-col justify-start gap-3'>

            <section className='flex gap-4 w-full '>
                <div className='flex flex-col text-xl w-[50%]'>
                    <label htmlFor="">First Name</label>
                    <input type="text"
                        placeholder='First Name'
                        name='FirstName'
                        className='p-2 rounded-md text-richblack-900 outline'
                        {...register("FirstName", { required: true })}

                    />
                    {errors.firstName && (
                        <span>First Name is required</span>
                    )}
                </div>
                <div className='flex flex-col text-xl w-[50%]'>
                    <label htmlFor="">Last Name</label>
                    <input type="text"
                        placeholder='Last Name'
                        name='LastName'
                        className='p-2 rounded-md text-richblack-900'
                        {...register("LastName", { required: true })}

                    />
                    {errors.firstName && (
                        <span>Last Name is required</span>
                    )}
                </div>
            </section>

            <section>
                <div className='flex flex-col text-xl'>
                    <label htmlFor="email">Email id</label>
                    <input type="email"
                        name='email'
                        id='email'
                        placeholder='Email Id'
                        className='p-2 rounded-md text-richblack-900'
                        {...register("email", { required: true })} />
                    {errors.email && (
                        <span>Email is required</span>
                    )}
                </div>
            </section>
            <section>
                <div className='flex flex-col text-xl'>
                    <label htmlFor="phoneNo">Phone No</label>
                    <input type="phoneNo"
                        name='phoneNo'
                        id='phoneNo'
                        className='p-2 rounded-md text-richblack-900'
                        placeholder='Phone No'
                        {...register("phoneNo", { required: true })} />
                    {errors.email && (
                        <span>Email is required</span>
                    )}
                </div>

            </section>

            <section className='flex gap-4'>
                <div className='flex flex-col text-xl w-[50%]'>
                    <label htmlFor="password">Create Password</label>
                    <input type="password"
                        name='password'
                        id='password'
                        className='p-2 rounded-md text-richblack-900'
                        placeholder='Enter Password'
                        {...register("password", { required: true })} />
                </div>
                <div className='flex flex-col text-xl w-[50%]'>
                    <label htmlFor="ConfirmPassword">Confirm Password</label>
                    <input type="password"
                        name='ConfirmPassword'
                        id='ConfirmPassword'
                        className='p-2 rounded-md text-richblack-900'
                        placeholder='Enter Confirm Password'
                        {...register("ConfirmPassword", { required: true })} />
                </div>
            </section>


            <button type='submit' className='bg-yellow-100 text-richblack-900 p-2.5 rounded-md font-semibold mt-5'>
                Create Account
            </button>



        </form>
    )
}

export default SignUpForm
