import React from 'react'
import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer md'>
        <motion.img
        // initial={{
        //     x: directionLeft ? -200 : 200,
        //     opacity: 0
        // }}
        // transition={{ duration: 1 }}
        // whileInView={{
        //     opacity: 1,
        //     x: 0
        // }}
        // viewport={{once: true}}
        src='https://cdn.worldvectorlogo.com/logos/react-1.svg'
        className='rounded-full border border-grey-500 object-cover w-16 h-16 md:h-20 md:w-20 xl:w-20 xl:h-20
        filter group-hover:grayscale transition duration-300 ease-in-out'
        />
        <div className='absolute opacity-0 group-hover:opacity-60 transition duration-300
        ease-in-out group-hover:bg-white w-16 h-16 md:h-20 md:w-20 xl:w-20 xl:h-20 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>

            </div>
        </div>
    </div>
  )
}

export default Skill