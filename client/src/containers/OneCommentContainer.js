import OneComment from '../components/comments/OneComment'
import { connect } from 'react-redux'
import { deleteComment } from '../redux/Actions'

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({
  deleteComment: (id) => dispatch(deleteComment(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(OneComment)