import { Carousel } from 'react-bootstrap';
import React from 'react';

interface PhotoGalleryInterface{
  src?:string[];
}
const PhotoGallery:React.FC<PhotoGalleryInterface> = ({src}) => {
  return (
    <Carousel interval={null}>
      {src?.map((photo)=>(
        <Carousel.Item key={photo}>
          <img
            className="d-block w-100"
            src={photo}
            alt="car photo"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoGallery;