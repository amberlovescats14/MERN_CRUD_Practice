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
export const getWeather = (cords) => async (dispatch) => {
  try {
    // shoud be lat /lng
    console.log("CORDS: ", cords)
    let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/`
    let token = process.env.REACT_APP_DARK_SKY
    console.log(`TOKEN: `, token);
    let res = await axios.get(url + `${token}/${cords.latitude},${cords.longitude}`)
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

//! GET GYMS 
export const getGyms = () => async (dispatch) => {
  try {
    let res = await axios.get("https://cors-anywhere.herokuapp.com/https://data.sanantonio.gov/api/3/action/datastore_search?resource_id=c21106f9-3ef5-4f3a-8604-f992b4db7512&q=planet fitness")
    let arr = res.data.result.records
    let bucket = []
    arr.forEach(item => {
      if(!bucket.includes(item.ADDRESS)) bucket.push(item.ADDRESS)
    })
    console.log(`BUCKET: `, bucket)
    dispatch({
      type: `GET_GYMS`,
      payload: bucket
    })
  } catch (error) {
    console.log(`GYM ERROR`)
  }
}

// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY