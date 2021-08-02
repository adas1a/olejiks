import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/all';

interface ProductInfoInterface{
  title: string|undefined
  description:string|undefined
  price: number|undefined
  created: string|undefined
}

const ProductInfoSection:React.FC<ProductInfoInterface> = ({ created, title, price, description }) => {

  const [like, setLike] = useState(false);

  const handleLikeButton = () => {
      setLike(true)
  };

  return (
    <div className='mt-3'>
      <Row>
        <Col >
          <p className='mt-1'>Added: {created?.split('T')[0]} at {created?.split('T')[1].split('.')[0]}</p>
        </Col>
        {like === false ?
          <AiOutlineHeart onClick={handleLikeButton} className='heart mr-3'/> :
          <AiFillHeart className='heart-clicked mr-3'/>
        }
      </Row>
      <h2 className='font-weight-normal'>{title}</h2>
      <h3 className='font-weight-bold mt-4'>{price} PLN</h3>
      <h4 className='font-weight-bold mt-4'>Description</h4>
      <p>{description}</p>
    </div>
  );
};

export default ProductInfoSection;