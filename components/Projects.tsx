import React from 'react'
import { motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

function Projects({}: Props) {

  const projects = [1, 2, 3, 4, 5];

  return (
<div className="h-screen relative flex overflow-hidden flex-col text-left
    max-w-full justify-evenly mx-auto items-center z-0 pr-3">

  <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500
      text-2xl'>
        Projects
  </h3>

  <div className='container'>

  <ul className="cards">
    <li className="card">
      <div>
        <h3 className="card-title">Project 1</h3>
        <img src="https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_960_720.jpg" alt=""/>
        <div className="card-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Project 2</h3>
        <img src="https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_960_720.jpg" alt="" />
        <div className="card-content">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae magnam harum natus fuga et repellat in maiores.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Project 3</h3>
        <img src="https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_960_720.jpg" alt="" />
        <div className="card-content">
          <p>Phasellus ultrices lorem vel bibendum ultricies. In hendrerit nulla a ante dapibus pulvinar eu eget quam.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Project 4</h3>
        <img src="https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_960_720.jpg" alt="" />
        <div className="card-content">
          <p>Aenean posuere mauris quam, pellentesque auctor mi bibendum nec. Sed scelerisque lacus nisi, quis auctor lorem ornare vel.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Project 5</h3>
        <img src="https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_960_720.jpg" alt="" />
        <div className="card-content">
          <p>Vestibulum pharetra fringilla felis sit amet tempor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras et arcu sit amet est consequat feugiat. Nam ut sapien pulvinar.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div>
    </li>
    <li className="card">
      <div>
        <h3 className="card-title">Project 6</h3>
        <img src="https://cdn.pixabay.com/photo/2019/01/17/19/11/login-3938432_960_720.jpg" alt="" />
        <div className="card-content">
          <p>Donec ut tincidunt nisl. Vivamus eget eros id elit feugiat mollis. Nam sed sem quis libero finibus tempor.</p>
        </div>
      </div>
      <div className="card-link-wrapper">
        <a href="" className="card-link">Read More</a>
      </div>
    </li>

  </ul>
  
</div>
</div>
  )
}

export default Projects