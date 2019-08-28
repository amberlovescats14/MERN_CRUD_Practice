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
    case `DELETE_COMMENT`:
    return {
      ...state,
      comments: payload.oldComments.filter(c => c.id !== payload.id),
      loading: false
    }
    default: return state
  }
}




export default combineReducers({
  test: testing,
  commentsObject: getComments
})