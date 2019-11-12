import React, {useEffect, useState} from 'react'
import MapContainer from '../../containers/MapContainer'
import Geocode from 'react-geocode'
import './css/weatherMap.css'
import rain from './css/amcharts_weather_icons_1.0.0/animated/rainy-1.svg';
import cloudy from './css/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg'
import sunny from './css/amcharts_weather_icons_1.0.0/animated/day.svg'
import wind from './css/amcharts_weather_icons_1.0.0/animated/weather_sagittarius.svg'

let google = process.env.REACT_APP_GOOGLE_TOKEN
Geocode.setApiKey(google)



const correctDate = (num) => {
    let time = new Date(num * 1000).toString()
    let split = time.split(' ')
    return`${split[1]} ${split[2]}`
}
const prefixDay = (num, num2) => {
    let time = new Date(num2 * 1000).toString()
    let split = time.split(' ')
    switch (num) {
        case 0: return `Today`;
        case 1: 
        case 2:    
            return split[0];
        default: return ''    
    }
}

const chooseIcon = (type) => {
    switch (type) {
        case 'rain': return rain
        case 'fog':
        case "partly-cloudy-day": return cloudy
        case 'clear-day': return sunny
        case 'wind':
        case 'cloudy': return wind
        default: return ''
    }
}

const Weather = (props) => {
  const { getWeather, weather} = props
  const {loading, forecast} = weather
  const [text , setText] = useState('')
  const [cords, setCords] = useState({
      latitude: 29.425170,
      longitude: -98.494610
  })
  useEffect(()=> {
    getWeather(cords)
   }, [])
   //!GEO CODING
   const getCords = (address) => {
    Geocode.fromAddress(address).then(
        response => {
            const {lat, lng} = response.results[0].geometry.location
            setCords({
                latitude: lat,
                longitude: lng
            })
        }, 
        error => {
            console.error(error)
        }
    )
    console.log(`CORDS`)
    getWeather(cords)
   }
   //! CODING
   const geoCache = (e) => {
       e.preventDefault()
       setText('')
       getCords(text)
}
console.log(`THE CORDS::: `, cords)
  return (
    <div style={{width: '100vw'}} id="weather-container">
    <nav className="nav-extended  indigo darken-4">
      <div className="nav-content">
          <form>
              <div className="input-field">
                  <input id="city-search" type="search" className="center-align" onChange={(e)=> setText(e.target.value)} value={text}/>
                  <label className="label-icon" htmlFor="city-search"><i className="material-icons"
                  id="searchButton" onClick={(e)=> geoCache(e)}>search</i></label>
                  <i className="material-icons">close</i>
              </div>
          </form>
      </div>
  </nav>
  {/* end nav */}
  {/* banner */}
  <div id="banner">
    <h6 id="banner-h6"><b>Weather-Map</b></h6>
<h4 id="title">Map Box & Dark Sky API</h4>
</div>
{/* end banner */}
<div id="main">
{loading ? (
  <div id="beforeLoading">
  <img src="https://icon-library.net/images/custom-loading-icon/custom-loading-icon-9.jpg" alt="loading"
       id="loading-image"/>
</div>
):(   
 <div id="afterLoading">
    <div id="overlay"></div>
    <div id="sky-card-wrapper">
{forecast.map((item,i)=> {
      let day = correctDate(item.time)
      let dayPrefix = prefixDay(i, item.time)
      let color = dayPrefix === 'Today'? '#21ce21' : 'white'

    return (
      <div className="card indigo darken-4 white-text all-cards" id={`card-${i}`} key={i}>
        <h2 style={{color: `${color}`, fontSize: '3vh', marginTop: '10px'}}><i>{day}</i></h2>
        <img src={chooseIcon(item.icon)} alt="icon"
        className="center weather-icon"/>
            <div className="card-content center" style={{height: '10vh'}}>
                {item.summary}
            </div>
                <div className="card-action">
                    High: {Math.round(item.temperatureHigh)} <br/>
                    Low: {Math.round(item.temperatureLow)}
            </div>
    </div>
    )
})}

</div>
</div>)}

{/* <!--    after loading--> */}

{/* <!--    before loading--> */}

{/* <!--    right--> */}
    <div id="map-container">
        <MapContainer cords={cords}/>
    </div>

</div>



            </div>
  )
}

export default Weather
