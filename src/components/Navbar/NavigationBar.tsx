import React, { FC } from 'react';
import { Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar: FC  = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/" className='ml-5'>Oleix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to='/table'>Adverts</Nav.Link>
            <Nav.Link as={Link} to='/new'>Add new advert</Nav.Link>
          </Nav>
          <Nav >
            <Nav.Link as={Link} to='/login' className='text-primary'>Login</Nav.Link>
            <Nav.Link as={Link} to='/register' className='text-danger'>Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavigationBar;
