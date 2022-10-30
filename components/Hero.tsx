import React from 'react'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import profilePic from '../public/image.jpg'


type Props = {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      'Hi, The Name is Ahmed Farag',
      'Guy-who-loves-Reading.tsx',
      '<ButLovesToCodeMore/>'
    ],
    loop: true,
    delaySpeed: 2000,
  })


  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles/>

      <Image
        className='relative rounded-full h-40 w-40 mx-auto object-cover '
        src={profilePic}
        alt='user profile picture'
      />


      <h1>
          <span>{text}</span>
          <Cursor cursorColor='#F7AB0A'/>
        </h1>
    </div>
  )
}