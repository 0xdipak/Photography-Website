import Hero from '@/components/Hero'
import Portfolio from '@/components/Portfolio'
import React from 'react'

const Work = () => {
  return (
    <div>
        <Hero heading='My Work' message='This is some of my recent work travelling the world' />
        <Portfolio />
    </div>
  )
}

export default Work