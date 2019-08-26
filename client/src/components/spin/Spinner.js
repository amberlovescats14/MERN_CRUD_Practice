import React from 'react'
import spinner from './redSpinner.gif'

const Spinner = () => {
  return (
    <div style={spinnerStyle}>
      <img src={spinner} alt="spinner" />
    </div>
  )
}

export default Spinner

const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center'
}

