import React, { Component } from 'react'
import ReactMapGL from 'react-map-gl';

const TOKEN = "pk.eyJ1IjoiYW1iZXJsb3Zlc2NhdHMxNCIsImEiOiJjazIyZ3J4b2wxdThhM2RsMmRxaGZxdWhzIn0.uXec6Sexsl65YNbQ89Neng"

export default class Map extends Component {
  // style: 'mapbox://styles/amberlovescats14/ck2nvmojv05z31cnz0pq3s9h4',
  // zoom: 10,
  // center: [-98.4916, 29.4252]

  state = {
    viewport: {
      width: '100vw',
      height: '400px',
      latitude: 29.4252,
      longitude: -98.4916,
      zoom: 10
    }
  };

  render() {
    return (
      <ReactMapGL mapboxApiAccessToken={TOKEN}
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
      />
    );
  }
}