import React from 'react'
import { 
  AppBar, Toolbar, IconButton, Typography, Hidden, Drawer, ListItemText, ListItem, Divider, List
} from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Link} from 'react-router-dom'


const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  anchor: {
    color: 'black',
    textDecoration: 'none'
  }
}));

const Nav2 = (props) => {
  const { container, children } = props;
  console.log(`children: `, children)
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>

          <ListItem button onClick={handleDrawerToggle}>
            <HomeIcon/>
            <ListItemText >
            <Link to='/' className={classes.anchor}>Home</Link>
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem button onClick={handleDrawerToggle}>
            <DirectionsRunIcon/>
            <ListItemText >
            <Link to='/comments' className={classes.anchor}>Comments-DB</Link>
            </ListItemText>
          </ListItem>
          <Divider />

          <ListItem button onClick={handleDrawerToggle}>
            <DirectionsRunIcon/>
            <ListItemText >
            <Link to='/weather' className={classes.anchor}>Weather</Link>
            </ListItemText>
          </ListItem>
          <Divider />

             <ListItem button onClick={handleDrawerToggle}>
            <DirectionsRunIcon/>
            <ListItemText >
            <Link to='/contact' className={classes.anchor}>Contact</Link>
            </ListItemText>
          </ListItem>
          <Divider />

             </List>


    </div>
  );
  return (
<div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
            {children}
      </main>
    </div>
  )
}

export default Nav2