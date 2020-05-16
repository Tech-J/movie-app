import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  Button,
  Container
} from "reactstrap";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home  from '../pages/Home.js';
import  MovieShow  from '../pages/MovieShow';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar color="dark" light expand="md">
        <Container fluid="sm">
          <NavbarBrand href="/" className="mr-auto">The Flix</NavbarBrand>
          <Button color="primary" className="mr-1">LogIn</Button>
          <Button color="success">SignUp</Button>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/movie/:id">
          <MovieShow />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;
