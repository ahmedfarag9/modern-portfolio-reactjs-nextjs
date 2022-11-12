import Head from 'next/head'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'


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