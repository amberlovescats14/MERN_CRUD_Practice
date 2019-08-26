import axios from 'axios'

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