import React, {useEffect} from 'react'

const Weather = (props) => {
  const { getWeather, weather} = props
  useEffect(()=> {
    getWeather()
   }, [])
   console.log(weather)
  return (
    <div>
      <h1>weather</h1>
    </div>
  )
}

export default Weather
