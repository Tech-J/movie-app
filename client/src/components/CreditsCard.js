import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Col, Row, Media
} from 'reactstrap';

function CreditsCard(props) {
  let {cast} = props;
  return (
    cast.map((actors,idx)=>{
      let {name, character, profile_path} = actors;
      return <Col key={idx} className="mb-3">
            <Media key={idx}>
              <Media left href="#">
                <Media width="75px"src={profile_path} alt="Generic placeholder image" />
              </Media>
            <Media body className="pl-3">
              <Media heading>
                {name}
              </Media>
                {character}
            </Media>
          </Media>

      </Col>
    })
  )
}

export default CreditsCard

