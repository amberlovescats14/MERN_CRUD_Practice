import React, {useEffect} from 'react'
// import { Helmet } from 'react-helmet'
import Map from './Map'
import './css/weatherMap.css'



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
        case 'rain': return `./css/amcharts_weather_icons_1.0.0/animated/rainy-1.svg`;
        case 'fog':
        case "partly-cloudy-day":
            return `./css/amcharts_weather_icons_1.0.0/animated/cloudy-day-1.svg`;
        case 'clear-day': return `./css/amcharts_weather_icons_1.0.0/animated/day.svg`
        default: return ''
    }
}

const Weather = (props) => {
  const { getWeather, weather} = props
  const {loading, forecast} = weather
  useEffect(()=> {
    getWeather()
   }, [])
//    console.log(`IN THE COMPONENT: `, forecast.daily)
  return (
    <div style={{width: '100vw'}} id="weather-container">
    <nav class="nav-extended  indigo darken-4">
      <div class="nav-content">
          <form>
              <div class="input-field">
                  <input id="city-search" type="search" class="center-align"/>
                  <label class="label-icon" htmlFor="city-search"><i class="material-icons"
                  id="searchButton">search</i></label>
                  <i class="material-icons">close</i>
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
    console.log(item)
      let day = correctDate(item.time)
      let dayPrefix = prefixDay(i, item.time)
      let color = dayPrefix === 'Today'? '#fbddd5' : 'white'

    return (
    <div id={i} key={i}>
      <div class="card indigo darken-4 white-text all-cards" id={`card-${i}`}>
        <h5 class="center" style={{color: color, height: '5vh'}}><i>day</i></h5>
        <img src={chooseIcon(item.icon)} alt="icon"
        class="center" id="icons"/>
            <div class="card-content center" style={{height: '10vh'}}>
                {item.summary}
            </div>
                <div class="card-action">
                    High: {Math.round(item.temperatureHigh)} <br/>
                    Low: {Math.round(item.temperatureLow)}
            </div>
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
        <Map/>
    </div>

</div>



            </div>
  )
}

export default Weather
