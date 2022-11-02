import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div initial={{
        className='relative flex justify-center items-center'>
        <div className='absolute border border-[#363636] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='absolute border border-[#363636] rounded-full h-[300px] w-[300px] mt-52 animate-ping '/>
        <div className='absolute border border-[#363636] rounded-full h-[500px] w-[500px] mt-52 animate-ping '/>
        <div className='absolute border border-[#F7AB0A] rounded-full h-[500px] w-[500px] mt-52 animate-ping '/>        
        <div className='absolute border border-[#363636] rounded-full h-[800px] w-[800px] mt-52 animate-ping '/> 
    </motion.div>
  )
}