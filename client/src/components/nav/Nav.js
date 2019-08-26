import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
const Nav = () => {
    return(
        <div>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                React & Material-UI Sample Application
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default Nav;
// import React from 'react'
// import { Link } from 'react-router-dom'

// const nav = () => {
//   return (
//     <div style={{border: '2px solid red'}}>
//       <h1>NAV</h1>
//       <ul style={style}>
//         <li><Link to="/">Landing Page</Link></li>
//         <li><Link to="/comments">Leave A Comment!</Link></li>
//         <li><Link to="/contact">Contact Me!</Link></li>
//       </ul>
//     </div>
//   )
// }

// const style= {
//   display: 'flex',
//   justifyContent: 'space-evenly'
// }

// export default nav
