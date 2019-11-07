import React, {Fragment} from 'react'
import './css/LandingBottom.css'
import {Typography} from '@material-ui/core'



const LandingBottom = () => {
  return (
    <Fragment>

    <div id="gridComponent">
    
          <Typography variant="h3" id="gridHeader"
          className="gridItems gridItem1">
    CSS grid renderings of a painting by the Dutch artist Piet Mondrian.
    </Typography>
   
        <div id="grid-wrapper" 
        className="gridItems gridItem2">
        <div id="one">1</div>
        <div id="two">2</div>
        <div id="three">3</div>
        <div id="four">4</div>
        <div id="five">5</div>
        <div id="six">6</div>
        <div id="seven">7</div>
        <div id="eight">8</div>
        <div id="nine">9</div>
    
    </div>
      
    </div>
    </Fragment>
  )
}

export default LandingBottom
