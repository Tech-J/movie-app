import React from 'react'
import MovieCard from '../components/MovieCard';
import { Container, Row } from 'reactstrap';
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <Container fluid="sm" className="m-auto">
      <SearchBar />
      <Row xs="6"  lg="1"className="mt-4">
        <MovieCard />
      </Row>
    </Container>
  )
}

export default Home
