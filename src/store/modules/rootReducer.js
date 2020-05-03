import { combineReducers } from 'redux'
import auth from './auth/reducer'
import user from './user/reducer'
import company from './company/reducer'
import category from './category/reducer'
import request from './request/reducer'

export default combineReducers({
  auth,
  user,
  company,
  category,
  request
})
