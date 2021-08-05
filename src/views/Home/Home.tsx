import React, { FC, useEffect, useState } from 'react';
import Axios from 'axios';
import { Button, Navbar, Form, Container, Row, Col } from 'react-bootstrap';
import { Advertisement } from '../../interfaces/Advertisement';
import MainCategories from '../../components/MainCategories/MainCategories';
import PromotedAdverts from '../../components/PromotedAdverts/PromotedAdverts';

const Home: FC = () => {
  // const [advertisements, setAdvertisements] = useState<Advertisement[]>();
  // note
  // const fetchAd = async():Promise<number> =>{
  //   const { status } = await Axios.get<Advertisement[]>('/api/advertisement');
  //   return status;
  // };
  //
  // const handleClick = async(): Promise<void> => {
  //   const status = await fetchAd();
  //   alert(status);
  // };

  // useEffect( () => {
  //   const fetchData = async (): Promise<void> => {
  //     try {
  //       const { data } = await Axios.get<Advertisement[]>('/api/advertisement');
  //       setAdvertisements(data);
  //       console.log(data);
  //     } catch (e) {
  //       // eslint-disable-next-line no-console
  //       console.error(e);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <Container fluid={true} className='pt-3 pb-5 bg-light justify-content-end'>
      <Form className='m-3'>
        <Row className='ml-4 mr-4'>
          <Col md={6} className='p-0 SearchBar'>
            <Form.Control type='text' placeholder="125645 adverts near you!" />
          </Col>
          <Col md={4} className='p-0 SearchBar'>
            <Form.Control type='text'  placeholder="Kielce" />
          </Col>
          <Col md={2} className='p-0'>
            <Button className='SearchBar w-100' type='submit'>Search</Button>
          </Col>
        </Row>
      </Form>
      <Row>
        <MainCategories/>
        <PromotedAdverts/>
      </Row>
    </Container>
  );
};

export default Home;
