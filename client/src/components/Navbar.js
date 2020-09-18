import React, { useEffect } from "react";
import {
  Navbar,
  NavbarBrand,
  Container
} from "reactstrap";
import { useSelector } from "react-redux";
import AuthButtons from './AuthButtons';
import ProfileButton from "./ProfileButton";

function NavBar() {
  let {token} = useSelector(state=> state.auth)
  return (
    <Navbar color="dark" light>
      <Container fluid="sm">
        <NavbarBrand href="/" className="mr-auto">The Flix</NavbarBrand>
        {
          token!=null ? <ProfileButton/>: <AuthButtons />
        }
      </Container>
    </Navbar>
  );
}

export default NavBar;
