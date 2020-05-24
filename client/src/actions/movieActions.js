import axios from 'axios';
import { useParams } from "react-router-dom";

const getMovies=()=> dispatch =>{
  axios.get(`./api/movies/`)
  .then(data =>{
    dispatch({
      type:"GET_POPULAR_MOVIES",
      payload:data.data})
  })
  .catch(err => console.log(err))
}

const getOneMovie=()=> dispatch =>{
  let { id } = useParams();
  axios.get(`/api/movies/${id}`)
  .then(data =>{
    dispatch({
      type:"GET_ONE_MOVIE",
      payload:data.data})
  })
  .catch(err => console.log(err))
}

export default {
  getMovies,
  getOneMovie
}