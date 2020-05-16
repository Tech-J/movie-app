import React from 'react';
import { Col, Jumbotron, ListGroup,
  ListGroupItem } from "reactstrap";
import GenreBadges from "../components/GenreBadges";

function MovieDetails(props) {
  let{ image, title, description, genres,
    budget, revenue, time, vote} = props.movieDetails;
  return (
    <>
      <Col lg={4}>
        <img width="100%" src={image} />
      </Col>
      <Col lg={8}>
        <Jumbotron height="100%">
          <h1 className="display-3">{title}</h1>
          <p className="lead">{description}</p>
          <GenreBadges genres={genres} />
          <hr className="my-2" />
          <ListGroup horizontal="md" width="100%">
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
