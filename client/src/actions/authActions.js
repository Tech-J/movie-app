import  axios  from "axios";
import  Errors from './errorActions'

const registerUser = (user) => (dispatch) =>{
  const config = configFunc()
  user.preventDefault();
  let [email, password] = user.currentTarget;
  let userObj = {
    email:email.value,
    password: password.value
  }
  axios.post('http://localhost:8080/api/users/',userObj,config)
  .then(res => {
    email.value=''
    password.value=''
    dispatch({
      type:"REGISTER_SUCCESS",
      payload: res.data
    })
  })
  .catch(err =>{
    dispatch(Errors.returnErrors(err.response.data, err.response.status))
    dispatch({
      type:"REGISTER_FAIL"
    })
  })
}

const loginUser = (user) => (dispatch) =>{
  const config = configFunc()
  user.preventDefault();
  let [email, password] = user.currentTarget;
  let userObj = {
    email:email.value,
    password: password.value
  }
  axios.post('http://localhost:8080/api/auth/',userObj,config)
  .then(res => {
    email.value=''
    password.value=''
    dispatch({
      type:"LOGIN_SUCCESS",
      payload: res.data
    })
  })
  .catch(err =>{
    dispatch(Errors.returnErrors(err.response.data, err.response.status))
    dispatch({
      type:"LOGIN_FAIL"
    })
  })
}

const loadUser = () => (dispatch,getState) =>{

  dispatch({type:'USER_LOADING'})

  const token = getState().auth.token;

  const config = configFunc()

  if(token){
    config.headers['x-auth-token'] = token;
  }

  axios.get('http://localhost:8080/api/auth/',config)
    .then(res => dispatch({
      type:"USER_LOADED",
      payload: res.data
    }))
    .catch(err =>{
      dispatch({
        type:"AUTH_ERROR"
      })
      dispatch(Errors.returnErrors(err.response.data, err.response.status))
    })
}

const logOut = () => (dispatch) =>{
  dispatch({
    type:"LOGOUT_SUCCESS"
  })
}

function configFunc(){
  return(
    {
      headers: {
        "Content-type": "application/json"
      }
    }
  )
}
export default {
  registerUser,
  loginUser,
  loadUser,
  logOut
}