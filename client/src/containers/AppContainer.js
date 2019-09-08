import App from '../App'
import { connect } from 'react-redux'
import { askName } from '../redux/Actions'

const mapStateToProps = state => ({
  app: state.app
})

const mapDispatchToProps = dispatch => ({
  askName: () => dispatch(askName())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)