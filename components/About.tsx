import React from 'react'
import { motion } from "framer-motion"
import profilePic from '../public/image.jpg'


type Props = {}

function About({}: Props) {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{opacity: 1}}
    className=' flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500
        text-2xl'>
            About
        </h3>

    </motion.div>
  )
}

export default About