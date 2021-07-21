import { Carousel } from 'react-bootstrap';
import React from 'react';

interface PhotoGalleryInterface{
  src?:string[];
}
const PhotoGallery:React.FC<PhotoGalleryInterface> = ({src}) => {
  return (
    <Carousel>
      {src?.map((photo)=>(
        <Carousel.Item key={photo}>
          <img
            className="d-block w-100"
            src={photo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoGallery;