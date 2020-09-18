import React from "react";
import { Badge } from "reactstrap";

function GenreBadges(props) {
  console.log(props)
  return (
    <div>
      {genres.map(({ name }, idx) => {
        return (
          <Badge color="dark" pill className="mr-2" key={idx}>
            {name}
          </Badge>
        );
      })}
    </div>
  );
}

export default GenreBadges;
