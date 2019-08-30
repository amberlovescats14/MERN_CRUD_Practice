import React from 'react'
import { Typography, Grid, List, ListItem } from '@material-ui/core'
import './css/LandingAbout.css'
import SecurityIcon from '@material-ui/icons/Security';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import PeopleIcon from '@material-ui/icons/People';

const styles = {
  wrapper: {
    textAlign: 'center'
  },
  aboutMe: {
    fontWeight: '500',
    textDecoration: 'underline',
    padding: '40px'
  },
  gridItems: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center'

  },
  icon: {
    color: 'white',
    fontSize: '11vh'
  },
  center: {
    margin: 'auto'
  },
  type: {
    textAlign: 'justify'
  }
}

const LandingAbout = () => {
  return (
    <div style={styles.wrapper}>
      <Typography variant="h2" style={styles.aboutMe}>About Me</Typography>
      <Grid container>
      <Grid item sm style={styles.gridItems}> 
      <List>
        <ListItem>
        <div class="shape-outer octagon">
	    <div class="shape-inner octagon">
      <SecurityIcon style={styles.icon} /> 
      </div>
      </div> 
        </ListItem>
        <ListItem>
        <Typography variant="h4" style={styles.center}>Integrity</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="subtitle2" >
           I have integrity in my work and hold myself to an industry-standard that includes producing clean, consistent and maintainable code
          </Typography>
        </ListItem>
      </List>
      </Grid>
      <Grid item sm style={styles.gridItems}> 
      <List>
        <ListItem>
        <div class="shape-outer octagon">
	    <div class="shape-inner octagon">
      <HourglassEmptyIcon style={styles.icon} /> 
      </div>
      </div> 
        </ListItem>
        <ListItem>
        <Typography variant="h4" style={styles.center}>Proficiency</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="subtitle2">
          Pursuing excellence with innovation, I have a high degree of technical competency as well as engaging presentation capabilities
          </Typography>
        </ListItem>
      </List>
      </Grid>
      <Grid item sm style={styles.gridItems}> 
      <List>
        <ListItem>
        <div class="shape-outer octagon">
	    <div class="shape-inner octagon">
      <WhatshotIcon style={styles.icon} /> 
      </div>
      </div> 
        </ListItem>
        <ListItem>
        <Typography variant="h4" style={styles.center}>Passion</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="subtitle2">
          Continual thirst for professional growth helps me
          thrive in an ecology where I can use my creative engineering skills to solve complex problems. 
          </Typography>
        </ListItem>
      </List>
      </Grid>
      <Grid item sm style={styles.gridItems}> 
      <List>
        <ListItem>
        <div class="shape-outer octagon">
	    <div class="shape-inner octagon">
      <PeopleIcon style={styles.icon} /> 
      </div>
      </div> 
        </ListItem>
        <ListItem>
        <Typography variant="h4" style={styles.center}>Empowerment</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="subtitle2">
          Fostering diversity increases trust. Together we can induce new paths for future generations and harness an inclusive enviroment

          </Typography>
        </ListItem>
      </List>
      </Grid>
      </Grid>
    </div>
  )
}

export default LandingAbout
