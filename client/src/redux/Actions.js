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

//! EDIT COMMENT 
export const editComment = (id, values) => async(dispatch, getState) => {
 const { commentsObject } = getState()
 
  try {
    let updatedComment = {
      
      name: values.name,
      text: values.text
    }
    const res = await axios.put(`/comments/${id}`, updatedComment)
    const res2 = await axios.get('/comments')
    
    dispatch({
      type: `UPDATE_COMMENT`,
      payload: {
        id,
        updatedComments: res2.data
      }
    })

    
  } catch (error) {
    console.error(error.message)
    console.log(`Edit Error`)
  }
}

//!DELTE COMMENT
export const deleteComment = id => async(dispatch, getState) => {
  console.log(`id: `, id)
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