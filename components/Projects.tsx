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

      <div className='relative w-full flex overflow-scroll overflow-y-hidden snap-x snap-mandatory
      z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80
      '>
        {projects.map((project, i) => (
          <div className='w-screen flex-shrink-0 snap-center flex-col space-y-5 items-center
          justify-center p-20 md:p-44 h-screen'>
              <p className='text-lg text-center md:text-left'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#F7AB01]/10 left-0 h-[500px]
      -skew-y-12 '/>
    </motion.div>
  )
}

export default Projects