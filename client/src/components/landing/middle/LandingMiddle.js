import React from 'react'
import { Grid } from '@material-ui/core'
import Left from './Left'
import Right from './Right'
const LandingMiddle = () => {
  return (

    <Grid container 
    style={{marginTop: '5%', marginBottom: '5%'}}>
    <Grid item sm>
    <Left/>
    </Grid>
    <Grid item sm>
    <Right/>
    </Grid>

    </Grid>
  )
}

export default LandingMiddle
