import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, ClickAwayListener, Paper, List, ListItem, ListItemIcon } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    color: 'white'
  },
  paper: {
    position: 'absolute',
    top: 36,
    right: 0,
    left: 0,
  },
  button: {
    float: 'right',
    color: 'white'
  },
  links: {
      color: 'black',
      textDecoration: 'none'
  }
}));

export default function Nav() {
  const [name, setName ] = React.useState()
  const askName = () => {
    console.log(`l;ksajf`)
    let res = prompt(`Hello, how may I address you?`)
    if(!res) setName(`Amber Jones`)
    setName(`Welcome ${res}`)
  }
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  const fake = <div>amber</div>;

  return (
    <AppBar className={classes.root}>
    <Toolbar>
      <ClickAwayListener onClickAway={handleClickAway} >
        <div>
          <Button onClick={handleClick} className={classes.button}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon/>
          </IconButton>
          </Button>
          {open ? (
            <Paper >
              <List>
              <ListItem button>
                <ListItemIcon>
                <SendIcon />
                <Link to="/" className={classes.links} >
              {" "}Landing
              </Link>
              </ListItemIcon>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                <SendIcon />
                <Link to="/comments" className={classes.links}> 
              Comments DB
              </Link>
              </ListItemIcon>
              </ListItem>
              </List>
              {/* <Link to="/" className={classes.links} >
              Landing
              </Link>
              <br/>
              <Link to="/comments" className={classes.links}> 
              Comments DB
              </Link>
              {fake}
              {fake}
              {fake} */}
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
      <Typography >Amber Jones</Typography>
      </Toolbar>
    </AppBar>
  );
}
const linkStyle = {

}