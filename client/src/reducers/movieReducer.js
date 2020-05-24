const initialState = {
  movies:[]
}

const movies = (state = initialState, action)=>{
  switch(action.type) {
    case "GET_POPULAR_MOVIES":
      return{
        movies:action.payload
      }
    default: return state;
  }
}

export default movies;