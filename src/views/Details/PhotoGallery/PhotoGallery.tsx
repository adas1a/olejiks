import { Button, Carousel, Image } from 'react-bootstrap';
import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { ImEnlarge } from 'react-icons/all';

interface PhotoGalleryInterface{
  src?:string[];
}
const PhotoGallery:React.FC<PhotoGalleryInterface> = ({ src }) => {
  const [toggler, setToggler] = useState(false);
  const [i, setI] = useState(0);

  const lightBoxHandler = (ind:number) => {
    setToggler(!toggler);
    setI(ind);
  };

  return (
    <div>
      <Carousel interval={null} className='mt-4' onSlid={eventKey => setI(eventKey)}>
        {src?.map((photo, index)=>(
          <Carousel.Item key={photo}>
              <Image
                className="d-block w-100"
                src={photo}
                alt="car photo"
                onClick={()=>lightBoxHandler(index)}
              />
          </Carousel.Item>
          ))}
      </Carousel>
      {src!=undefined ?       <ImEnlarge className='dupa' onClick={()=>lightBoxHandler(i)}/>
        : null }
      <FsLightbox
        toggler={toggler}
        sources={src}
        sourceIndex={i}
        type="image"
      />

    </div>
  );
};

export default PhotoGallery;
