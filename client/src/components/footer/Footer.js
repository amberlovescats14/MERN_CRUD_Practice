import React from 'react'
import {Paper, Typography, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-evenly',
  }
}
const useStyles = makeStyles(theme => ({
  link: {
    margin: theme.spacing(1),
  },
}));

// This resolves to nothing and doesn't affect browser history
const dudUrl = "https://www.linkedin.com/in/amberlovescats14/";
const dudUrl2 = "https://github.com/amberlovescats14"
const Footer = () => {
  const classes = useStyles();
  return (
    <Typography>
    <Paper style={styles.root}>
      <Typography variant="subtitle1">me@amberjones.dev</Typography>
      <Link href={dudUrl} color="inherit" className={classes.link}>
        LinkedIn = /amberlovescats14
      </Link>
      <Link href={dudUrl} color="inherit" className={classes.link}>
        GitHub = /amberlovescats14
      </Link>

    </Paper>
    </Typography>
  )
}

export default Footer
