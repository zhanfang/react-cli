import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import user from './UserPage'

const rootReducer = combineReducers({
  routing,
  user
})

export default rootReducer
