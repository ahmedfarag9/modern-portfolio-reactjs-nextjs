import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-[#363636] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Ahmed's Portfolio</title>
      </Head>

      <Header/>


      {/* Hero */}

      <section id="hero" className='snap-center'>
        <Hero/>
      </section>

      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}

    </div>
  )
}