import React from "react";
import { Badge } from "reactstrap";

function GenreBadges(props) {
  let { genres } = props;
  return (
    <div>
      {genres.map((genre, idx) => {
        return (
          <Badge color="dark" pill className="mr-2" key={idx}>
            {genre.name}
          </Badge>
        );
      })}
    </div>
  );
}

export default GenreBadges;
