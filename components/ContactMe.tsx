import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Projects from './Projects'
import { useForm, SubmitHandler } from "react-hook-form";
import Link from 'next/link'

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
};


function ContactMe({}: Props) {

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = 'mailto:test@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}, ${formData.message} (${formData.email})' ;
    }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl
    px-10 justify-evenly mx-auto items-center'>
        
            <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
            text-2xl '>
                Contact
            </h3>
        
        <div className='flex flex-col space-y-6 '>
            {/* <h4 className='text-4xl font-semibold text-center'>
                I have got just what you need.{" "}
                <span className='underline decoration-[#F&AB01]/50'>Let's Talk.</span>
            </h4> */}

            <div className='space-y-8 mt-10 md:mt-20 l:mt-20 xl:mt-20 '>
                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>+1234567890</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>test@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                    <p className='text-xl'>123 Developer Lane</p>
                </div>

            </div>



            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-1 w-fit mx-auto '>
                <div className='flex space-x-1'>
                    <input {...register('name')}
                    placeholder=' Name'
                    className='contactInput' type="text"
                    />
                    <input {...register('email')}
                    placeholder=' Email'
                    className='contactInput' type="email"
                    />
                </div>

                <input {...register('subject')} placeholder=' Subject' className='contactInput2' type="text" />
                
                <textarea {...register('message')} placeholder=' Message' className='contactInput2'/>
                <button
                type='submit'
                className='bg-[#F7AB0A] py-3 px-10 rounded-md
                text-black font-bold text-lg'>
                    Submit
                </button>
            </form>
            </div>




   </div>
  )
}

export default ContactMe