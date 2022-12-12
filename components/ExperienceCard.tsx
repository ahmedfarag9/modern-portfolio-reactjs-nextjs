import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function ExperienceCard({}: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929 p-10] hover:opacity-100
        opacity-90 cursor-pointer transition-opacity duration-200 overflow-hidden'>
            <motion.img
            initial={{ 
                y: -100,
                opacity: 0 
            }}
            transition={{ duration: 1.2 }}
            whileInView={{
                opacity: 1,
            y: 0
            }}
            viewport={{ once: true }}
            className='w-32 h-32 rounded-full object-cover object-center' 
                src="https://st4.depositphotos.com/21230196/23977/v/450/depositphotos_239776244-stock-illustration-specialist-icon-vector-white-background.jpg"
                alt="" 
            />

            <div className='px-0 md:px-10'>
                <h4 className='uppercase text-3xl font-light'>IT Specialist</h4>
                <p className='uppercase font-bold text-xl mt-1'>Company X</p>
                <div className='flex space-x-2 my-2'>
                    {/* <img 
                    className='h-10 w-10 rounded-full'
                    src="https://st4.depositphotos.com/21230196/23977/v/450/depositphotos_239776244-stock-illustration-specialist-icon-vector-white-background.jpg"
                    alt=""
                    />
                    <img 
                    className='h-10 w-10 rounded-full'
                    src="https://st4.depositphotos.com/21230196/23977/v/450/depositphotos_239776244-stock-illustration-specialist-icon-vector-white-background.jpg"
                    alt=""
                    />
                    <img 
                    className='h-10 w-10 rounded-full'
                    src="https://st4.depositphotos.com/21230196/23977/v/450/depositphotos_239776244-stock-illustration-specialist-icon-vector-white-background.jpg"
                    alt=""
                    />                                         */}
                </div>
                <p className='uppercase py-5 text-gray-300'>Started work.. - Ended..</p>
                <ul className='list-disc space-y-4 text-sm md:text-xl'>
                    <li>Summary points Summary points Summary points</li>
                    <li>Summary points Summary points Summary points</li>
                    <li>Summary points Summary points Summary points</li>
                </ul>
            </div>
        </article>
    )
}