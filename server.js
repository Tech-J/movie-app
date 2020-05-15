const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const axios = require('axios');
const { port, tmDB } = require('./config');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

//route to find individual movie
app.get('/api/movies/:id',(req,res)=>{
  let movieId = req.params.id || 297761;
  axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmDB}&language=en-US&append_to_response=credits`)
  .then(data =>{
    let movieObj = {
      title: data.data.original_title,
      description: data.data.overview,
      genres: data.data.genres,
      image: `https://image.tmdb.org/t/p/w500/${data.data.poster_path}`,
      vote: data.data.vote_average,
      vote_count: data.data.vote_count,
      budget: data.data.budget.toLocaleString("en-US"),
      revenue: data.data.revenue.toLocaleString("en-US"),
      cast: data.data.credits.cast,
      date: data.data.release_date,
      time: data.data.runtime
    }
    res.status(200).json(movieObj)
  })
  .catch(err => console.log(err))
})


//route to find popular movies
app.get('/api/movies',(req, res)=>{
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${tmDB}&language=en-US`)
  .then(response => {
    let movieArray = response.data.results.map(info=>{
      return{
        title: info.original_title,
        poster: `https://image.tmdb.org/t/p/w500/${info.poster_path}`,
        vote: info.vote_average
      }
    })
    res.status(200).json(movieArray)
  })
  .catch(err => res.send(err))
})

app.listen(port,()=>console.log(`listening on ${port}`))

