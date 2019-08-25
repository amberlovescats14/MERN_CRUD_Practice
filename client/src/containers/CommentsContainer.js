import Comments from '../components/comments/Comments'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  test: state.test
})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)