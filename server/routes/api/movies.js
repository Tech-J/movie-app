const router = require('express').Router();
const axios = require('axios');
const config = require("config")
const  tmDB  = process.env.tmDB || config.get("tmDB");

router.route('/')
  .get((req, res)=>{
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${tmDB}&language=en-US`)
    .then(response => {
      let movieArray = response.data.results.map(movie=>{
        return{
          id: movie.id,
          title: movie.original_title,
          poster: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
          vote: movie.vote_average
        }
      })
      res.status(200).json(movieArray)
    })
    .catch(err => res.send(err))
  })

router.route('/:id')
  .get((req,res)=>{
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
        cast: data.data.credits.cast.map(cast=>{
          cast.profile_path = cast.profile_path!== null ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : 'https://img.icons8.com/cotton/2x/gender-neutral-user--v2.png'
          return cast
        }),
        date: data.data.release_date,
        time: data.data.runtime
      }
      res.status(200).json(movieObj)
    })
    .catch(err => console.log(err))
  })

module.exports = router;