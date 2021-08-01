import React, { useState } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import profilePic from '../../images/profilePicture.jpg';

interface UserInfoInterface{
  userName:string|undefined
  userPhone:string|undefined
}

const UserInfoSection:React.FC<UserInfoInterface> = ({ userName, userPhone }) => {
  const [number, setNumber] = useState<string|undefined>('Get number' );

  const handleShowNumber = () => {
    setNumber(userPhone);
  };

  return (
    <>
      <h4 className='mt-2'>User</h4>
      <Row>
        <Col className='mt-2 ml-3'>
          <Image src={profilePic} roundedCircle width='60'/>
        </Col>
        <Col>
          <p className='mt-3 mr-3'>{userName}</p>
        </Col>
      </Row>
      <Row className='mt-3'>
          <Button className='ml-3' onClick={handleShowNumber}>{number}</Button>
      </Row>
    </>
  );
};

export default UserInfoSection;
