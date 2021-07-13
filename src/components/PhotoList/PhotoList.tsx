import React, { FC, useCallback, useState } from 'react';
import { Col, Image } from 'react-bootstrap';
import image from '../../images/image.png';

import '../../styles/new-styles.css';

interface Photos {
  onClick?:(ev:any) => void;
  url?:string;
}
const PhotoList:FC<Photos> = ({onClick, url }) => {

  return (
    <>
      <Col xs={6} md={3} onClick={onClick}>
        <Image src={ url !== undefined ? url : image} className='w-100 onHover'/>
      </Col>
    </>

  );
};

export default PhotoList;
