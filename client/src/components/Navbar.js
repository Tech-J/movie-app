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
import MovieShow from '../pages/MovieShow';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';


function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar color="dark" light>
        <Container fluid="sm">
          <NavbarBrand href="/" className="mr-auto">The Flix</NavbarBrand>
          <Button color="primary" className="mr-1" href="/login">LogIn</Button>
          <Button color="success" href="/signup">SignUp</Button>
        </Container>
      </Navbar>
      <Switch>
        <Route path="/movie/:id">
          <MovieShow />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default NavBar;
