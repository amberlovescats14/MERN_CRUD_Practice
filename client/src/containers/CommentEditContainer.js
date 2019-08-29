import CommentEdit from '../components/comments/CommentEdit'
import { connect } from 'react-redux'
import { editComment } from '../redux/Actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  editComment: (id, values) => dispatch(editComment(id, values))
})

export default connect(mapStateToProps, mapDispatchToProps)(CommentEdit)