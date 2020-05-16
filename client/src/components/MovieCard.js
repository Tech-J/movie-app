import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardLink, Badge, Col, Row
} from 'reactstrap';
import '../App.css'

function MovieCard(prop) {
  let { movies } = prop;
  return( 
    movies.map((data,idx)=>{
      return( 
        <Col key={idx} className="mb-5" xs="6" lg="3">
          <Card className="movie-card">
            <CardLink href={`movie/${data.id}`}>
              <CardImg top src={data.poster} alt="Card image cap" />
              <CardBody>
                <Row>
                  <Col xs="12" lg="10"><CardTitle>{data.title}</CardTitle></Col>
                  <Col xs="12" lg="2"><Badge>{data.vote}</Badge></Col>
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
