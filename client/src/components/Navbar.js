import React from "react";
import {
  Navbar,
  NavbarBrand,
  Button,
  Container
} from "reactstrap";



function NavBar() {
  return (
      <Navbar color="dark" light>
        <Container fluid="sm">
          <NavbarBrand href="/" className="mr-auto">The Flix</NavbarBrand>
          <Button color="primary" className="mr-1" href="/login">LogIn</Button>
          <Button color="success" href="/signup">SignUp</Button>
        </Container>
      </Navbar>
  );
}

export default NavBar;
