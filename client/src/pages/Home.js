import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard';
import { Container, Row } from 'reactstrap';
import axios from 'axios';

function Home() {
  const [movies,setMovies] = useState([])

  const fetchData = async()=>{
    let data = await axios.get('./api/movies/')
    setMovies(data.data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div>
      <Container fluid="sm" className="m-auto">
        <Row xs="6" md="3" lg="1"className="mt-4">
          {movies.length>0 && <MovieCard  movies={movies}/>}
        </Row>
      </Container>
    </div>
  )
}

export default Home
