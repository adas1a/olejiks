import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import '../../styles/new-styles.css';
import profilePic from '../../images/profilePicture.jpg';

interface DetailsInterface {
  id: string
  title: string
  category: string
  photos: string[]
  description:string
  location: string
  price: number
  email:string
  phone:string
  created: string
}

const Details:React.FC = () => {
  const { advertId }:{advertId:string} = useParams();

  const [details, setDetails] = useState<DetailsInterface>();
  const [buttonText, setButtonText] = useState<string | null>('Call Seller');
  useEffect(()=>{
  const fetchDetails = async (): Promise<void> => {
    try {
      const { data } = await Axios.get<DetailsInterface>(`/api/advertisement/${advertId}`);
      setDetails(data);
    }
    catch(e) {
      console.error(e);
    }
  };
  fetchDetails();
}, [advertId]);
  return(
    <div>
      <Container>
      <Row>
        <Col className='detailBg'>
          <PhotoGallery src={details?.photos}/>
        </Col>
        <Col className='detailBg' md={4}>
          <h5>User</h5>
          <Row>
            <Col>
              <Image src={profilePic} roundedCircle width={60} />
            </Col>
            <Col>
              <p>{details?.email}</p>
            </Col>
          </Row>
          <Button id='phoneNumberButton'>{buttonText}</Button>
          <p>{details?.location}</p>
        </Col>
      </Row>
      <Row>
        <Col className='detailBg'>
          <p>{details?.title}</p>
          <p>{details?.price} PLN</p>
          <p>{details?.description}</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Details;
