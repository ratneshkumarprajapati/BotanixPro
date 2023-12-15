import React from 'react'
import { useForm } from "react-hook-form"

const ContactUsForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    return (

        <form action=" " className='w-[100%]' onSubmit={handleSubmit((data)=>console.log(data))}>

            <div className='w-[80%] flex flex-col justify-center  mt-5'>
                <section className='text-xl text-richblack-25 flex flex-col justify-center '>
                    <label htmlFor="">Name</label>
                    <input type="text"
                        name='name'
                        id='name'
                        placeholder='Enter your Name'
                        className='p-1 text-xl bg-richblack-700 border-b-2 text-richblack-25 border-b-2 border-b-richblack-100'
                        {...register("name", { required: true })} />
                    {errors.name && (
                        <span>Name is Importent</span>
                    )}
                </section>

                <section className='text-xl text-richblack-25 flex flex-col justify-center'>
                    <label htmlFor="">Email Id</label>
                    <input type="email"
                        name='email'
                        id='email'
                        className='p-1 text-xl bg-richblack-700 border-b-2 text-richblack-25 border-b-richblack-100'
                        placeholder='Enter your email id'
                        {...register("email", { required: true })} />
                    {errors.email && (
                        <span>email is required</span>
                    )}

                </section>

                <section className='text-xl text-richblack-25 flex flex-col justify-center'>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Enter your message' className='p-1 text-xl bg-richblack-700 border-b-2 text-richblack-25 border-b-richblack-100' 
                    {...register("message",{required:true})}> 
                    {errors.message&&(
                        <span>Message is required</span>
                    )}</textarea>
                </section>


                <button className='text-xl font-semibold py-1.5 rounded-md bg-yellow-200 mt-8'>
                    send
                </button>







            </div>
        </form>

    )
}

export default ContactUsForm
