import React from 'react'
import LandingHeader from './LandingHeader'
import LandingAbout from './LandingAbout'
import LandingMiddle from './middle/LandingMiddle'
import LandingBottom from './LandingBottom'

const Landing = () => {
  return (
    <div>
      <LandingHeader/>
      <LandingAbout/>
      <LandingMiddle/>
      {/* <hr/> */}
      {/* <LandingBottom/> */}

    </div>
  )
}

export default Landing
