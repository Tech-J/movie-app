import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Container, Row } from "reactstrap";

import axios from "axios";
import CreditsCard from "../components/CreditsCard";
import MovieDetails from "../components/MovieDetails";

function MovieShow() {
  const [movie, setMovie] = useState([]);
  let { id } = useParams();
  const fetchData = async () => {
    let { data }  = await axios.get(`/api/movies/${id}`);
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
            <MovieDetails movie={movie}/>
          </Row>
          <Row lg="6" xs="3" sm="4" md="6">
            <CreditsCard cast={movie.cast} />            
          </Row>
        </>
      )}
    </Container>
  );
}

export default MovieShow;
