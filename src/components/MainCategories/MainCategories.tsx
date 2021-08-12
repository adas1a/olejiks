import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import image from '../../images/car.jpg';

const MainCategories = () => {
  return (
    <Container>
      <Row className='pb-5'>
        <h2 className='xd text-center pt-3 mt-5 mb-5' >Main Categories</h2>
        <Col>
          <div className='xdd'>
            <Image src={image} className='w-100 xd2' roundedCircle alt='' />
            <p className='h6 w-100 text-center'> Category Name</p>
          </div>
        </Col>
        <Col>
          <div className=' xdd'>
            <Image src={image} className='w-100 xd2' roundedCircle alt='' />
            <p className='h6 w-100 text-center'> Category Name</p>
          </div>
        </Col>
        <Col>
          <div className=' xdd'>
            <Image src={image} className='w-100 xd2' roundedCircle alt='' />
            <p className='h6 w-100 text-center'> Category Name</p>
          </div>
        </Col>
        <Col>
          <div className=' xdd'>
            <Image src={image} className='w-100 xd2' roundedCircle alt='' />
            <p className='h6 w-100 text-center'> Category Name</p>
          </div>
        </Col>
        <Col>
          <div className=' xdd'>
            <Image src={image} className='w-100 xd2' roundedCircle alt='' />
            <p className='h6 w-100 text-center'> Category Name</p>
          </div>
        </Col>
      </Row>
      <Row className='mt-5 pb-5'>
        <Col>
          <div className=' xdd'>
            <Image src={image} className='w-100 xd2' roundedCircle alt='' />
            <p className='h6 w-100 text-center'> Category Name</p>
          </div>
        </Col>
        <Col>
          <div className=' xdd'>
            <Image src={image} className='w-100 xd2' roundedCircle alt='' />
            <p className='h6 w-100 text-center'> Category Name</p>
          </div>
        </Col>
        <Col>
          <div className='xdd'>
            <Image src={image} className='w-100 xd2' roundedCircle alt='' />
            <p className='h6 w-100 text-center'> Category Name</p>
          </div>
        </Col>
        <Col>
          <div className=' xdd'>
            <Image src={image} className='w-100 xd2' roundedCircle alt='' />
            <p className='h6 w-100 text-center'> Category Name</p>
          </div>
        </Col>
        <Col>
          <div className=' xdd'>
            <Image src={image} className='w-100 xd2' roundedCircle alt='' />
            <p className='h6 w-100 text-center'> Category Name</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default MainCategories;