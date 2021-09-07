import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toogleFalse } from "../../JS/action/contact";
import './Navbar.css'

function NavBar() {

  const dispatch = useDispatch()
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link className="link" to="/">
            Contact list
          </Link>
          <Link className="link" to="/addContact"
          onClick={()=>dispatch(toogleFalse())}
          >
            Add Contact
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
