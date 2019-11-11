import React, {useState} from 'react'
import ReactMapGL, {Marker} from 'react-map-gl'
import * as parkInfo from './parks.json'


const Map = () => {
  const [viewport, setViewport ] = useState({
    latitude: 29.424349,
    longitude: -98.491142,
    zoom: 9.7,
    width: '100%',
    height: '400px',
  })
  const token = process.env.REACT_APP_MAPBOX_TOKEN
  const styles = process.env.REACT_APP_MAPBOX_URL
  // const url = `https://api.mapbox.com/styles/amberlovescats14/ck2orr8o90zez1clof65opmdw&access_token=${token}`
  return (
    <div style={{border: '2px solid yellow'}}>
      <ReactMapGL {...viewport} mapboxApiAccessToken={token}
      onViewportChange={(viewport)=> {setViewport(viewport)}}
      mapStyle={styles}>
        Markers Here
      </ReactMapGL>
    </div>
  )
}

export default Map

