import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Spinner from '../spin/Spinner'
import OneComment from './OneComment'

const Comments = (props) => {
  const {test, getComments} = props
  const { comments, loading } = props.commentsObject
  useEffect(()=> {
   getComments()
  }, [getComments])
  return (
    loading ? <Spinner/> :
    <div>
      {test}
      {comments.map((c, i)=> (
        <OneComment comments={c} key={i}/>
      ))}
    </div>
  )
}
Comments.prototype = {
  getComments: PropTypes.func.isRequired,
  commentsObject: PropTypes.object.isRequired,
}


export default Comments

