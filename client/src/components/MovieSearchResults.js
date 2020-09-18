import React from "react";
import { ListGroupItem, Media } from "reactstrap";

function MovieSearchResults({ movie }) {
  console.log(movie);
  return movie.map(({img, title, description, }) => {
    return (
      <ListGroupItem className="p-0">
        <Media >
          <Media left href="#">
            <Media
              width="100px"
              height="100%"
              object
              src={img}
              alt="Generic placeholder image"
            />
          </Media>
          <Media body className="p-2">
            <Media heading>{ title }</Media>
            {/* <Media >{description}</Media> */}
          </Media>
        </Media>
      </ListGroupItem>
    );
  });
}

export default MovieSearchResults;
