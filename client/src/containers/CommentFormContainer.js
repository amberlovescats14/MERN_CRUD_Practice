import CommentForm from '../components/comments/CommentForm'
import { connect } from 'react-redux'
import { addComment } from '../redux/Actions'

const mapStateToProps = state => ({
  
})

const mapDispatchToProps = dispatch => ({
  addComment: (values) => dispatch(addComment(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm)