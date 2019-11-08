import React, {useEffect} from 'react'
import './css/weatherMap.css'

const Weather = (props) => {
  const { getWeather, weather} = props
  const {loading, forecast} = weather
  useEffect(()=> {
    getWeather()
   }, [])
//    console.log(`IN THE COMPONENT: `, forecast.daily)
  return (
    <div style={{width: '90vw'}} id="weather-container">
    <nav class="nav-extended  indigo darken-4">
    <div class="nav-wrapper">
        <a href="#" class="brand-logo center">AMBER_JONES</a>
    
    </div>
      <div class="nav-content">
          <form>
              <div class="input-field">
                  <input id="city-search" type="search" class="center-align"/>
                  <label class="label-icon" for="city-search"><i class="material-icons"
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
<div class="row" id="main">
{weather.loadinig ? (
  <div class="col s12 " id="beforeLoading">
  <img src="https://icon-library.net/images/custom-loading-icon/custom-loading-icon-9.jpg" alt="loading"
       id="loading-image"/>
</div>
):(    <div class="col s12" id="afterLoading">
<div id="overlay"></div>
<div id="sky-card-wrapper">
{forecast.map((w,i)=> (
    <div>i</div>
))}
{/* <div id="0" class="card-box"></div>
<div id="1" class="card-box"></div>
<div id="2" class="card-box"></div> */}
</div>
</div>)}

{/* <!--    after loading--> */}

{/* <!--    before loading--> */}

{/* <!--    right--> */}
    <div class="col s12" id="map-container">
        <div id="map"></div>
    </div>

</div>



    </div>
  )
}

export default Weather
