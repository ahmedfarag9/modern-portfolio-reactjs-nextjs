import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"


type Props = {}

export default function Header({}: Props) {
  return (
        <motion.div 
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x:0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1.5
        }}
        className='flex flex-center items-center text-gray-300 cursor-pointer'>
        <SocialIcon 
            className='cursor-pointer'
            network='email' 
            fgColor='gray'
            bgColor='transparent'
            />
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
        </motion.div>

    </header>
  )
}