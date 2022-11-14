import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function ExperienceCard({}: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-7  flex-shrink-0
        w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929 p-10] hover:opacity-100
        opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
            className='w-32 h-32 rounded-full xl:w-[20px] xl:h-[200px] object-cover object-center' 
                src="https://st4.depositphotos.com/21230196/23977/v/450/depositphotos_239776244-stock-illustration-specialist-icon-vector-white-background.jpg"
                alt="" 
            />

            <div className='px-0 md:px-10'>
                <h4 className='uppercase text-4xl font-light'>IT Specialist</h4>
                <p className='uppercase font-bold text-2xl mt-1'>The Egyptian Armed Forces</p>
            </div>
        </article>
    )
}