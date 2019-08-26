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
  switch(action.type){
    case `GET_COMMENTS`: 
    return {
      ...state,
      comments: action.payload,
      loading: false
    }
    default: return state
  }
}

export default combineReducers({
  test: testing,
  commentsObject: getComments
})