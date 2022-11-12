import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Projects({}: Props) {

  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
    initial={{ opacity: 0 }}
    transition={{ duration: 1.5 }}
    whileInView={{opacity: 1}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
    max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500
        text-2xl'>
          Projects
      </h3>

    </motion.div>
  )
}

export default Projects