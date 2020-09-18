import React, {useEffect, useState} from 'react';
import {
  useParams,
  useLocation
} from "react-router-dom";
import axios from "axios";
import {
  Container,
  ListGroup,
  Spinner
} from 'reactstrap';
import MovieSearchResults from '../components/MovieSearchResults';

function Results() {
  let query = useLocation().search;
  const [results, setResults] = useState([]);
  const [IsLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`/api/movies/search${query}`)
      .then(response=>{
        setResults(response.data);
        setIsLoading(false);
      })
      .catch(error=>{console.log(error)})
  }, [])



return (
    <Container>
      <ListGroup>
        {IsLoading ? <Spinner /> : <MovieSearchResults movie={results.results}/>}
      </ListGroup>
    </Container>
  )
}

export default Results
