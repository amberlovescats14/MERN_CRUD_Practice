import axios from 'axios'

//!GET ALL COMMENTS
export const getComments = () => async(dispatch) => {
  try {
    const res = await axios.get('/comments')
    console.log(res.data)
    dispatch({
      type: `GET_COMMENTS`,
      payload: res.data
    })
  
  } catch (error) {
    console.error(error.message)
  }
}


//!ADD COMMENT

export const addComment = (values) => async(dispatch, getState) => {
  const { commentsObject } = getState()
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const res = await axios.post('/comments', values, config)
    dispatch({
      type: `ADD_COMMENT`,
      payload: {
        oldPosts: commentsObject.comments,
        newPosts: res.data
      }
    })
  } catch (error) {
    console.error(error.message)
  }
}

//!DELTE COMMENT
export const deleteComment = id => async(dispatch, getState) => {
  try {
    await axios.delete(`/comments/${id}`)
    const { commentsObject } = getState()

    dispatch({
      type: `DELETE_COMMENT`,
      payload: {
        oldComments: commentsObject.comments,
        id
      }
    })
  } catch (error) {
    console.log(`Delete Error`)
    console.error(error.message)
  }
}