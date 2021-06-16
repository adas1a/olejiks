import React, { FC } from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Button } from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

interface NavButtonProps {
  label: string;
  link: string;
}

const NavButton: FC<NavButtonProps> = (props) => (
    <LinkContainer to={props.link} exact>
      <Button variant='secondary'>
        <ArrowRight /> {props.label}
      </Button>
    </LinkContainer>
  );

export default NavButton;
