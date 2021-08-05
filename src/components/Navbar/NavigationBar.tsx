import React, { FC } from 'react';
import { Nav, Navbar} from 'react-bootstrap';

const NavigationBar: FC  = () => {
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
          <Nav >
            <Nav.Link href="/login" className='text-primary'>Login</Nav.Link>
            <Nav.Link href="/register" className='text-danger'>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
