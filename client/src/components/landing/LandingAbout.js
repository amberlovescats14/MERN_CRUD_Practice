import React from 'react'
import { Typography, Grid, List, ListItem } from '@material-ui/core'
import './css/LandingAbout.css'
import SecurityIcon from '@material-ui/icons/Security';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';

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
    // flexDirection: 'column',
    justifyContent: 'center',
    border: '2px solid green',
    textAlign: 'center'

  },
  icon: {
    color: 'white',
    fontSize: '11vh'
  },
  center: {
    margin: 'auto'
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
          <Typography variant="subtitle2">
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
           I thrive in an ecology where I can use my creative engineering skills to solve complex problems, also in a culture that values collaboration, diversity and community involvement.
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
        <Typography variant="h4" style={styles.center}>Passion</Typography>
        </ListItem>
        <ListItem>
          <Typography variant="subtitle2">
           I thrive in an ecology where I can use my creative engineering skills to solve complex problems, also in a culture that values collaboration, diversity and community involvement.
          </Typography>
        </ListItem>
      </List>
      </Grid>
      <Grid item sm style={styles.gridItems}>
      <div class="shape-outer octagon">
	    <div class="shape-inner octagon"></div>
      </div>
      </Grid>
      </Grid>
    </div>
  )
}

export default LandingAbout
