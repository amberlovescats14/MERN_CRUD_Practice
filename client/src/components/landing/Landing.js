import React from 'react'
import LandingHeader from './LandingHeader'
import LandingAbout from './LandingAbout'
import LandingMiddle from './middle/LandingMiddle'

const Landing = () => {
  return (
    <div>
      <LandingHeader/>
      <LandingAbout/>
      <LandingMiddle/>
    </div>
  )
}

export default Landing
