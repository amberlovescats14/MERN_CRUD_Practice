import React, {useState, useEffect, getDerivedStateFromProps} from 'react'
import ReactMapGL, {Marker, GeolocateControl, FlyToInterpolator} from 'react-map-gl'
// import * as parkInfo from './parks.json'
import icon from './css/exercise.png'

const test = ['a', 'b', 'c']
let testCords = [29.594980,-98.363968 ]
const iconURL = require('./css/exercise.png')



const Map = (props) => {
  const {planetFitness, getGyms, cords} = props
  const [cords2, setCords2] = useState(cords)
  const [viewport, setViewport ] = useState()
  // getDerivedStateFromProps(props, viewport.latitude)
  const token = process.env.REACT_APP_MAPBOX_TOKEN
  const styles = process.env.REACT_APP_MAPBOX_URL
  useEffect(()=> {
    getGyms()
    setCords2(props.cords)
    setViewport({
      latitude: props.cords.latitude,
      longitude: props.cords.longitude,
      zoom: 8,
      width: '100%',
      height: '400px',
    })
   }, [props.cords])


   const [selectedMarker , setSelectedMarker] = useState(null)
   const handleClick = (e,t) => {
    e.preventDefault()
    setSelectedMarker(t)
    console.log(setSelectedMarker)
  }
  console.log("CORDS-1: ", cords )
  console.log("CORDS-2: ", cords2)
  console.log(`VIEWPORT: `, viewport)
  return (
    <div id="map" style={{border: '2px solid yellow'}}>
      <ReactMapGL {...viewport} mapboxApiAccessToken={token}
      onViewportChange={(viewport)=> {setViewport(viewport)}}
      mapStyle={styles}>
      <GeolocateControl
      positionOptions={{enableHighAccuracy: true}}
      trackUserLocation={true}
      showUserLocation={true}
      transitionDuration={1000}
      transitionInterpolator={new FlyToInterpolator()}/>
    {test.map(t => (
      <Marker key={t}
      latitude={testCords[0]}
      longitude={testCords[1]}>
      <button >
      <img src={icon} alt="icon" className="gym-icon"/>
      </button>
      </Marker>
    ))}
      </ReactMapGL>
    </div>
  )
}

export default Map

