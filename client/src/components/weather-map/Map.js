import React, {useState, useEffect} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
// import * as parkInfo from './parks.json'
import icon from './css/exercise.png'

const test = ['a', 'b', 'c']
let testCords = [29.594980,-98.363968 ]
const iconURL = require('./css/exercise.png')



const Map = (props) => {
  const {planetFitness, getGyms} = props
  const [viewport, setViewport ] = useState({
    latitude: 29.424349,
    longitude: -98.491142,
    zoom: 9.7,
    width: '100%',
    height: '400px',
  })
  const token = process.env.REACT_APP_MAPBOX_TOKEN
  const styles = process.env.REACT_APP_MAPBOX_URL
  useEffect(()=> {
    getGyms()
   }, [])
   console.log(`GYM COMPONENT: `, planetFitness)


   const [selectedMarker , setSelectedMarker] = useState(null)
   const handleClick = (e,t) => {
    e.preventDefault()
    setSelectedMarker(t)
    console.log(setSelectedMarker)
  }

  return (
    <div id="map" style={{border: '2px solid yellow'}}>
      <ReactMapGL {...viewport} mapboxApiAccessToken={token}
      onViewportChange={(viewport)=> {setViewport(viewport)}}
      mapStyle={styles}>
    {test.map(t => (
      <Marker key={t}
      latitude={testCords[0]}
      longitude={testCords[1]}>
      <button onClick={(e, t)=> handleClick(e, t)}>
      <img src={icon} alt="icon" className="gym-icon"/>
      </button>
      </Marker>
    ))}
      </ReactMapGL>
    </div>
  )
}

export default Map

