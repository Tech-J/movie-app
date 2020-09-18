const router = require('express').Router();
const axios = require('axios');
const config = require("config")
const  tmDB  = process.env.tmDB || config.get("tmDB");

router.route('/')
  .get((req, res)=>{
    axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${tmDB}&language=en-US`)
    .then(response => {
      let movieArray = response.data.results.map(movie=>{
        return{
          id: movie.id,
          title: movie.title,
          poster: `https://image.tmdb.org/t/p/original${movie.poster_path}`,
          vote: movie.vote_average,
          release_date: movie.release_date
        }
      })
      movieArray.sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
      res.status(200).json(movieArray)
    })
    .catch(err => res.send(err))
  })

router.route('/search')
  .get((req,res)=>{
    const { title } = req.query;
    axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${tmDB}&language=en-US&query=${title}&include_adult=false&append_to_response=genres`)
      .then(response=>{
        let { data } = response
        data.results = data.results.map(movie=>{
          return{
            id:movie.id,
            title:movie.title,
            description:movie.overview,
            img:`https://image.tmdb.org/t/p/original${movie.poster_path}`
          }
        })
        res.status(200).json(data)
      })
      .catch((err) => res.status(401).send({msg: err}))
  })


router.route('/:id')
  .get((req,res)=>{
    let movieId = req.params.id || 297761;
    axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${tmDB}&language=en-US&append_to_response=credits`)
    .then(({data}) =>{
      let movieObj = {
        title: data.original_title,
        description: data.overview,
        genres: data.genres,
        image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
        vote: data.vote_average,
        vote_count: data.vote_count,
        budget: !(data.budget===0) ? `$${data.budget.toLocaleString("en-US")}`:'N/A',
        revenue: !(data.revenue===0) ? `$${data.revenue.toLocaleString("en-US")}`:'N/A',
        cast: data.credits.cast.map(cast=>{
          cast.profile_path = cast.profile_path!== null ? `https://image.tmdb.org/t/p/w500${cast.profile_path}` : 'https://bit.ly/2ZyWAe5'
          return cast
        }),
        date: data.release_date,
        time: data.runtime
      }
      res.json(movieObj)
    })
    .catch(err => console.log(err))
  })

module.exports = router;