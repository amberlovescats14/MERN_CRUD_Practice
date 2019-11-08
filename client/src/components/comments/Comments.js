import React, {useEffect} from 'react'
import PropTypes from 'prop-types'
import Spinner from '../spin/Spinner'
import OneCommentContainer from '../../containers/OneCommentContainer'
import CommentFormContainer from '../../containers/CommentFormContainer'
import { Grid, Typography, Paper } from '@material-ui/core'

const styles = {
  list: {
    margin: ' 10px 0 10px 0'
  },
  paper: {
    height: '100%',
    overflowY: 'scroll'
  },
  header: {
    color: '#FE6B8B'
  },
  subHeader: {
    color: '#e4e4e4'
  }
}

const Comments = (props) => {
  const { getComments} = props
  const { comments, loading } = props.commentsObject
  useEffect(()=> {
   getComments()
  }, [getComments])
  return (
    loading ? <Spinner/> :
    <Grid container style={{height: '90vh', width: '90vw'}}>
    <Grid item sm>
    <Paper style={styles.paper}>
    <Typography variant="h4" style={styles.header}>Leave A Comment!</Typography>
    <Typography variant="subtitle2" style={styles.subHeader}>
    *This app does not require authorization, please only edit your own comment
    </Typography>
    <CommentFormContainer/>
    </Paper>
    </Grid>
    <Grid item sm>
    <Paper style={styles.paper}>
    {comments.map((c, i)=> (
        <OneCommentContainer style={styles.list}comments={c} key={i}/>
      ))}
      </Paper>
    </Grid>
    </Grid>
  )
}
Comments.prototype = {
  getComments: PropTypes.func.isRequired,
  commentsObject: PropTypes.object.isRequired,
}


export default Comments

