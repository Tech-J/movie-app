import React from 'react';
import {
  Col, Jumbotron, ListGroup,
  ListGroupItem
} from "reactstrap";
// import GenreBadges from "../components/GenreBadges";

function MovieDetails({movie}) {
  let { image, title, description, genres,
    budget, revenue, time, vote } = movie;
  return (
    <>
      <Col lg={3} md={6} className="pr-lg-0">
        <img width="100%" src={image} className="h-100" alt="No Pic" />
      </Col>
      <Col lg={9} md={6} className="pl-lg-0">
        <Jumbotron className="h-100">
          <h1 className="movie_title">{title}</h1>
          <p className="movie_description">{description}</p>
          {/* <GenreBadges genres={genres} /> */}
          <hr className="my-2" />
          <ListGroup horizontal="lg" width="100%">
            <ListGroupItem tag="a" >Budget: {`${budget}`}</ListGroupItem>
            <ListGroupItem tag="a" >Revenue: {`${revenue}`}</ListGroupItem>
            <ListGroupItem tag="a" >Runtime: {`${time} minutes`}</ListGroupItem>
            <ListGroupItem tag="a" >Rating: {vote}</ListGroupItem>
          </ListGroup>
        </Jumbotron>
      </Col>
    </>
  )
}

export default MovieDetails
