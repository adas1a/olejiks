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
      <Col xs={6} md={3} onClick={onClick} className=''>
        {url === undefined ? null : <BsFillTrashFill className='dupa2' />}
        <Image src={ url !== undefined ? url : image} className='onHover dupa'/>
      </Col>
    </>

  );

export default PhotoList;
