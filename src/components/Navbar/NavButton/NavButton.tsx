import React, { FC } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Nav, NavDropdown, Navbar } from 'react-bootstrap';

interface NavButtonProps {
  label: string;
  link: string;
}

const NavButton: FC<NavButtonProps>  = (props) => {
  return (
    <>
      {/*<LinkContainer to={props.link} exact>*/}
      {/*  <Button variant='secondary'>*/}
      {/*    <ArrowRight /> {props.label}*/}
      {/*  </Button>*/}
      {/*</LinkContainer>*/}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" className='ml-5'>Oleix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/table">Adverts</Nav.Link>
            <Nav.Link href="/new">Add new advert</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavButton;
