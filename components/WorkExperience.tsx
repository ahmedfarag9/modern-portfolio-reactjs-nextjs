import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard'


type Props = {}

function WorkExperience({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    transition={{ duration: 1 }}
    whileInView={{opacity: 1}}
    className=' flex flex-col relative h-screen text-center md:text-left
    md:flex-row max-w-7xl px-10 justify-evenly items-center'>

    </motion.div>
  )
}

export default WorkExperience