import { combineReducers } from 'redux'




const testing = (state = "", action ) => {
  switch(action.type){
    default: return state
  }
}
//!comments initial state
const commentsInitialState = {
  comments: [],
  loading: true
}

export const getComments = (state = commentsInitialState, action) => {
  const {payload, type} = action
  switch(type){
    case `GET_COMMENTS`: 
    return {
      ...state,
      comments: payload,
      loading: false
    }
    case `ADD_COMMENT`:
    return {
      ...state,
      comments: payload.oldPosts.concat(payload.newPosts),
      loading: false
    }
    case `UPDATE_COMMENT`: 
    return {
      ...state,
      comments: payload.updatedComments,
      loading: false
    }
    case `DELETE_COMMENT`:
    return {
      ...state,
      comments: payload.oldComments.filter(c => c._id !== payload.id),
      loading: false
    }
    default: return state
  }
}
const weatherInitialState = {
  forecast: {},
  loading: true
}
export const getWeather = (state = weatherInitialState, action ) => {
  switch(action.type){
    case `GET_WEATHER`:
    return {
      ...state,
      forecast: action.payload.daily.data.filter((f,i)=> i < 3),
      loading: false
    }
    default: return state
  }
}
const gymInitialState = {
  gymLoactions : [],
  loading: true
}
//! GYMS
export const getGyms = (state = [], action) => {
  switch(action.type){
    case `GET_GYMS`: 
      return {
        ...state,
        gymLoactions: action.payload,
        loading: false
      }
    default: return state
  }
}


export default combineReducers({
  test: testing,
  commentsObject: getComments,
  weather: getWeather,
  planetFitness: getGyms
})