import axios  from "axios";
import  Errors from './errorActions'

// console.log(returnErrors)

let {returnErrors} =Errors

console.log(returnErrors)

const loadUser = () => (dispatch,getState) =>{

  dispatch({type:'USER_LOADING'})

  const token = getState().auth.token;

  const config = {
    headers: {
      "Content-type": "application/json"
    }
  }

  if(token){
    config.headers['x-auth-token'] = token;
  }

  axios.get('/api/auth/',config)
    .then(res => dispatch({
      type:"USER_LOADED",
      payload: res.data
    }))
    .catch(err =>{
      dispatch(returnErrors(err.response.data, err.response.status))
      dispatch({
        type:"AUTH_ERROR"
      })
    })

}

export default {
  loadUser
}