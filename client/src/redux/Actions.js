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
export const editComment = (id) => async(dispatch, getState) => {
 
  try {
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

//! GET WEATHER
export const getWeather = () => async (dispatch) => {
  try {
    let sanAntonio = [29.424349, -98.491142]
    let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/`
    let token = process.env.REACT_APP_DARK_SKY
    console.log(`TOKEN: `, token);
    let res = await axios.get(url + `${token}/${sanAntonio[0]},${sanAntonio[1]}`)
    console.log(`res.data: `, res.data)
    dispatch({
      type: `GET_WEATHER`,
      payload: res.data
    })
  } catch (error) {
    console.log(`Weather Error`);
    console.error(error.message)
  }
}