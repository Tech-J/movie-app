import React from 'react';
import {
  Col, Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImg
} from 'reactstrap';
import '../App.css';

function CreditsCard({ cast }) {
  return (
    cast.map(({ name, character, profile_path }, idx) => {
      return (
        <Col key={idx} className="mb-3">
          <Card className="h-100">
            <CardImg top width="100%" src={profile_path} alt="Card image cap" />
            <CardBody className="p-2">
              <CardTitle className="actor-name">{name}</CardTitle>
              <CardSubtitle className="text-truncate actor-title">{character}</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      )
    })
  )
}

export default CreditsCard

