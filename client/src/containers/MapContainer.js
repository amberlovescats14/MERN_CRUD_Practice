import Map from '../components/weather-map/Map'
import { connect } from 'react-redux'
import { getGyms } from '../redux/Actions'

const mapStateToProps = state => ({
  planetFitness : state.planetFitness
})

const mapDispatchToProps = dispatch => ({
  getGyms : () => dispatch(getGyms())
})

export default connect(mapStateToProps, mapDispatchToProps)(Map)