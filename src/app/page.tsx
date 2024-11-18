import React from 'react'
import Hero from './Hero/page'
import About from './About/page'
import Skills from "./Skills/page"
import Services from './Services/page'
import Contact from './Contact/page'
const page = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default page