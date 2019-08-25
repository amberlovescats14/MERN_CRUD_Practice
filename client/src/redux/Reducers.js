import { combineReducers } from 'redux'


const testing = (state = "", action ) => {
  switch(action.type){
    default: return state
  }
}

export default combineReducers({
  test: testing
})