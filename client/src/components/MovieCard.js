import React, { useEffect } from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardLink, CardSubtitle, Col, Row
} from 'reactstrap';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import allActions from '../actions/index'


function MovieCard() {
  const dispatch = useDispatch()
  const { movies } = useSelector(state => state.movies)

  useEffect(() => {
    dispatch(allActions.movieActions.getMovies())
  }, [])
  return (
    movies.length > 0 && movies.map(({ id, poster, title, release_date, vote }, idx) => {
      return (
        <Col key={idx} className="mb-5 h-100" xs="4" md="2" lg="2">
          <Card className="movie-card">
            <CardLink href={`movie/${id}`}>
              <CardImg top src={poster} alt="Card image cap" className="h-auto" />
              <CardBody className="p-2">
                <Row className="mobile-text">
                  <Col xs="12"><CardTitle className="text-truncate">{title}</CardTitle></Col>
                  <Col xs="12" lg="8"><CardSubtitle>{release_date}</CardSubtitle></Col>
                  <Col xs="12" lg="4"><CardSubtitle>{vote}</CardSubtitle></Col>
                </Row>
              </CardBody>
            </CardLink>
          </Card>
        </Col>
      )
    })
  )
}

export default MovieCard