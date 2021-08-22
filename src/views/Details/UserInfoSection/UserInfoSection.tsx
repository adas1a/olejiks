import React, { useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import { Button, Col, Image, Row } from 'react-bootstrap';
import profilePic from '../../../images/profilePicture.jpg';

interface UserInfoInterface {
  userName: string | undefined;
}

interface PhoneNumberInterface {
  phoneNumber: number | undefined;
}

const UserInfoSection: React.FC<UserInfoInterface> = ({ userName }) => {
  const { advertId }: { advertId: string } = useParams();
  const initialState = 'Get Number';
  const [number, setNumber] = useState<PhoneNumberInterface | string>(initialState);

  const handleShowNumber = async (): Promise<void> => {
    try {
      if (number === initialState) {
        const { data: fetchedNumber } = await Axios.get<PhoneNumberInterface>(`advertisement/phone/${advertId}`);
        setNumber(fetchedNumber);
        console.log(`Fetched number: ${setNumber}`);
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h4 className='mt-2'>User</h4>
      <Row>
        <Col xs='auto' className='mt-2 ml-3'>
          <Image src={profilePic} roundedCircle width='60' />
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
