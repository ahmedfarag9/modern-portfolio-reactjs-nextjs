import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'

type Props = {}

function Skills({}: Props) {
  return (
    <motion.div
    className=' flex relative flex-col text-center md:text-left
    xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center
    xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
        text-2xl'>
            Skills
        </h3>
        {/* <h3 className='absolute top-20 uppercase tracking-[3px] text-gray-500
        text-sm'>
            Hover over a skill for current proficiency
        </h3> */}

        <div className='grid grid-cols-4 gap-3 mt-10 md:mt-20 xl:pt-28 pt:30 '>
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
            <Skill />
        </div>

    </motion.div>
  )
}

export default Skills