import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, Row, Col } from "reactstrap";

import axios from "axios";
import CreditsCard from "../components/CreditsCard";
import MovieDetails from "../components/MovieDetails"

function MovieShow(props) {
  let { id } = useParams();
  const [movie, setMovie] = useState([]);

  const fetchData = async () => {
    let { data } = await axios.get(`/api/movies/${id}`);
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid="sm">
      {movie.title && (
        <>
          <Row className="mb-5 ">
            <MovieDetails movieDetails={movie}/>
          </Row>
          <Row lg={4} xs={2} md={3}>
            <CreditsCard cast={movie.cast} />            
          </Row>
        </>
      )}
    </Container>
  );
}

export default MovieShow;
