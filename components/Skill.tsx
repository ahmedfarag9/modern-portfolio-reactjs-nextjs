import React from 'react'
import { motion } from "framer-motion";

type Props = {
    directionLeft?: boolean;
};

function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
        <motion.img
        initial={{
            x: directionLeft ? -200 : 200,
            opacity: 0
        }}
        transition={{ duration: 1 }}
        whileInView={{
            opacity: 1,
            x: 0
        }}
    </div>
  )
}

export default Skill