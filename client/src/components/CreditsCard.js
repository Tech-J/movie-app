import React from 'react';
import { Col, Media } from 'reactstrap';
import '../App.css';

function CreditsCard(props) {
  let {cast} = props;
  return (
    cast.map((actors,idx)=>{
      let {name, character, profile_path} = actors;
      return(
        <Col lg={3} key={idx} className="mb-3">
          <Media key={idx}>
            <Media left href="#">
              <Media width="75px"src={profile_path} alt="Generic placeholder image" />
            </Media>
            <Media body className="pl-1">
              <Media heading className="fs-3vw">
                {name}
              </Media>
              <Media heading className="fs-2vw">
                {character}
              </Media>
            </Media>
          </Media>
        </Col>
      )
    })
  )
}

export default CreditsCard

