import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import { Col, Container, Row, Image, Button } from 'react-bootstrap';
import PhotoGallery from './PhotoGallery/PhotoGallery';
import '../../styles/new-styles.css';
import profilePic from '../../images/profilePicture.jpg';
import UserInfoSection from './UserInfoSection/UserInfoSection';
import LocationSection from './LocationSection/LocationSection';
import ProductInfoSection from '../../components/ProductInfoSection/ProductInfoSection';

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
      <Container className='mt-5'>
      <Row>
        <Col className='detailBg' md={8}>
          <PhotoGallery src={details?.photos}/>
        </Col>
        <Col className='detailBg'>
          <UserInfoSection userName={details?.email} userPhone={details?.phone}/>
          <LocationSection key={null} city={details?.location}/>
        </Col>
      </Row>
      <Row>
        <Col className='detailBg' md={8}>
          <ProductInfoSection created={details?.created} title={details?.title} price={details?.price} description={details?.description}/>
        </Col>
      </Row>
    </Container>
  );
};

export default Details;
