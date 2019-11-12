import Weather from '../components/weather-map/Weather'
import { connect } from 'react-redux'
import { getWeather } from '../redux/Actions'

const mapStateToProps = state => ({
  weather: state.weather
})

const mapDispatchToProps = dispatch => ({
  getWeather : (cords) => dispatch(getWeather(cords))
})

export default connect(mapStateToProps, mapDispatchToProps)(Weather)