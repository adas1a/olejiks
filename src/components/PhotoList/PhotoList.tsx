import React, { FC } from 'react';
import { Col, Image } from 'react-bootstrap';
import { BsFillTrashFill } from 'react-icons/all';
import image from '../../images/image.png';

interface Photos {
  onClick?:(ev:any) => void;
  url?:string;
}
const PhotoList:FC<Photos> = ({ onClick, url  }) => (
    <>
      <Col xs={6} md={3} onClick={onClick} className='enlargeWrapper'>
        {url && <BsFillTrashFill className='FrontingDeleteButton' />}
        <Image src={ url !== undefined ? url : image} className='PhotoListStyles'/>
      </Col>
    </>

  );

export default PhotoList;
