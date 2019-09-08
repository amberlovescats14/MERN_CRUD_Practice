import React, {Fragment} from 'react'
import {CssBaseline, Paper, Typography } from '@material-ui/core'

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  
  },
  picture: {
    width: '17vw',
    height: '30vh',
    clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)"
  },
  span: {
   color: '#3f51b5'
  }
}

const Left = () => {
  return (
    <div style={styles.root}>
      <CssBaseline/>
     
          <img src={require('../css/self.jpg')} 
          style={styles.picture} alt="pic"/>
          <Typography variant="h3">Who is she?</Typography>
          <Typography variant="subtitle1">
          I'm the Full-Stack Developer <br/> in 
          <span style={styles.span}> San Antonio, TX. </span> <br/>
          I have serious passion for algorithms, teamwork and creating intuitive, dynamic user experiences. <br/>
          <span style={styles.span}>Let's make something special.</span>
        
          </Typography>
    
      
    </div>
  )
}

export default Left
