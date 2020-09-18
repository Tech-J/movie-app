const initialState ={
  msg:{},
  status:null,
  id:null
}

const errors = (state= initialState, action)=>{
  switch(action.type){
    case "GET_ERRORS":
      return{
        ...action.payload.msg,
        status: action.payload.status,
        id:action.payload.id
      };
    case "CLEAR_ERRORS":
      return{
        msg:{},
        status:null,
        id:null
      };
    default:
      return state 
  }
}



export default errors