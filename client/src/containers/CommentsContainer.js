import Comments from '../components/comments/Comments'
import { connect } from 'react-redux'
import { getComments } from '../redux/Actions'

const mapStateToProps = state => ({
  test: state.test,
  commentsObject: state.commentsObject
})

const mapDispatchToProps = dispatch => ({
  getComments: () => dispatch(getComments())
})

export default connect(mapStateToProps, mapDispatchToProps)(Comments)