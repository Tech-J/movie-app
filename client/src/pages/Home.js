import React from 'react'
import MovieCard from '../components/MovieCard';
import { Container, Row } from 'reactstrap';

function Home() {
  return (
    <div>
      <Container fluid="sm" className="m-auto">
        <Row xs="6" md="3" lg="1"className="mt-4">
           <MovieCard />
        </Row>
      </Container>
    </div>
  )
}

export default Home
