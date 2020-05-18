import React from 'react';
import { Col, Jumbotron, ListGroup,
  ListGroupItem } from "reactstrap";
import GenreBadges from "../components/GenreBadges";

function MovieDetails(props) {
  let{ image, title, description, genres,
    budget, revenue, time, vote} = props.movieDetails;
  return (
    <>
      <Col lg={3} md={6}>
        <img width="100%" src={image} className="h-100"/>
      </Col>
      <Col lg={9} md={6}>
        <Jumbotron className="h-100">
          <h1 className="movie_title">{title}</h1>
          <p className="movie_description">{description}</p>
          <GenreBadges genres={genres} />
          <hr className="my-2" />
          <ListGroup horizontal="lg" width="100%">
            <ListGroupItem tag="a" >Budget: {`$${budget}`}</ListGroupItem>
            <ListGroupItem tag="a" >Revenue: {`$${revenue}`}</ListGroupItem>
            <ListGroupItem tag="a" >Runtime: {`${time} minutes`}</ListGroupItem>
            <ListGroupItem tag="a" >Rating: {vote}</ListGroupItem>
          </ListGroup>
        </Jumbotron>
      </Col>
    </>
  )
}

export default MovieDetails
