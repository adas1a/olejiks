import { Carousel, Image, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';

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
