const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const axios = require('axios');
const { port, tmDB } = require('./config');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger('dev'));

app.get('/api/latest',(req, res)=>{
  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${tmDB}&language=en-US`)
  .then(response => {
    let { results } = response.data
    let responseArray = results.map(info=>{
      return{
        title: info.original_title,
        poster: `https://image.tmdb.org/t/p/w500/${info.poster_path}`,
        vote: info.vote_average
      }
    })
    res.status(200).send(responseArray)
  })
  .catch(err => res.send(err))
})

app.listen(port,()=>console.log(`listening on ${port}`))

