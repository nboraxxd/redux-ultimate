import { combineReducers } from 'redux'
import counterReducer from './counterReducer'
import userListReducer from './userListReducer'

const rootReducer = combineReducers({
  counter: counterReducer,
  userList: userListReducer,
})

export default rootReducer
