import React, { useState } from 'react';
import { Button, Col, Image, Row } from 'react-bootstrap';
import profilePic from '../../../images/profilePicture.jpg';

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
        <Col xs='auto' className='mt-2 ml-3'>
          <Image src={profilePic} roundedCircle width='60'/>
        </Col>
        <Col>
          <p>{userName}</p>
          <Button onClick={handleShowNumber}>{number}</Button>
        </Col>
      </Row>
    </>
  );
};

export default UserInfoSection;
