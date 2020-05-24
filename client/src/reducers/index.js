import { combineReducers } from "redux";
import movies from './movieReducer';
import users from './userReducer';
import errors from './errorReducer';
import auth from './authReducer';


export default combineReducers({
  movies,
  users,
  errors,
  auth
})