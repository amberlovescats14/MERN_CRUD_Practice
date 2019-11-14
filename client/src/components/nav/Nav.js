import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DehazeIcon from '@material-ui/icons/Dehaze';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import {AppBar, Typography} from '@material-ui/core'
import { Link } from 'react-router-dom'
import indigo from '@material-ui/core/colors/indigo'
import { withTheme } from '@material-ui/styles';

const primary = indigo[900]

const useStyles = makeStyles({
  root: {
    background: primary,
    color: 'white',
    width: '100vw',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: '10px'
  },
  list: {
    width: 250
    },
  sideList: {
    width: 'auto',
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',

  },
  button: {
    color: 'white',
    marginRight: 'auto'
  }
});

export default function TemporaryDrawer(props) {
  const { children } = props
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };


  const sideList = side => (
    <div
      className={classes.sideList}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
      <ListItem button>
            <HomeIcon/>
            <ListItemText>
              <Link to='/'>Home</Link>
              </ListItemText>
          </ListItem>
      <Divider />
         <ListItem button>
            <MailIcon/>
            <ListItemText>
              <Link to='/comments'>Comments-DB</Link>
              </ListItemText>
          </ListItem>
      <Divider />
      <ListItem button>
            <MailIcon/>
            <ListItemText>
              <Link to='/weather'>Weather-API</Link>
              </ListItemText>
          </ListItem>
      <Divider />
      <ListItem button>
            <MailIcon/>
            <ListItemText>
              <Link to='/contact'>contact</Link>
              </ListItemText>
          </ListItem>
      <Divider />
      </List>

    </div>
  );
  return (
    <div >
      <AppBar position="static" className={classes.root}>
      <Button onClick={toggleDrawer('left', true)} style={{width: '20vw'}}>
      <DehazeIcon style={{color: 'white'}}/>
      </Button>
      <div style={{width: '65vw'}}>
      <Typography variant="h4" style={{float: 'right'}}>REACT_App</Typography>
      </div>
      </AppBar>

      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      {children}
    </div>
  );
}