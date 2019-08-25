import React from 'react'
import { Link } from 'react-router-dom'

const nav = () => {
  return (
    <div style={{border: '2px solid red'}}>
      <h1>NAV</h1>
      <ul style={style}>
        <li><Link to="/">Landing Page</Link></li>
        <li><Link to="/comments">Leave A Comment!</Link></li>
        <li><Link to="/contact">Contact Me!</Link></li>
      </ul>
    </div>
  )
}

const style= {
  display: 'flex',
  justifyContent: 'space-evenly'
}

export default nav
