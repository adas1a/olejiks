import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import PhotoGallery from '../../components/PhotoGallery/PhotoGallery';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

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
  console.log(details);
  return(
    <div>
      <Container>
      <Row>
        <Col>
          <PhotoGallery src={details?.photos}/>
        </Col>
        <Col md="auto">
          <p>Created by: {details?.email}</p>
          <p>Phone number: {details?.phone}</p>
        </Col>
      </Row>
      <Row>
        <Col>
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
