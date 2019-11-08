import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom'
import blue from '@material-ui/core/colors/blue'

const primary = blue[900]

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  sideList: {
    width: 'auto',
    background: primary

  },
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
console.log(`CHILDREN: `,children)
  return (
    <div>
      <Button onClick={toggleDrawer('left', true)}>Left</Button>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
      {children}
    </div>
  );
}