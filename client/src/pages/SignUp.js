import React from 'react'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux'
import allActions from '../actions';

function SignUp() {
  const dispatch = useDispatch();

  return (
    <Container className="align-content-center h-100">
      <Row className="vh-100 align-items-center">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h3 className="text-center">SignUp</h3>
          <Form onSubmit={(e)=>dispatch(allActions.authActions.registerUser(e))}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="email" className="mr-sm-2">Email</Label>
              <Input type="email" name="email" id="email" placeholder="something@idk.cool" />
            </FormGroup>
            <FormGroup className="mt-3 mr-sm-2 mb-sm-0">
              <Label for="password" className="mr-sm-2">Password</Label>
              <Input type="password" name="password" id="password" placeholder="don't tell!" />
            </FormGroup>
            <Button className="mt-3 mr-sm-2 mb-sm-0">Submit</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUp
