import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '300px',
};

const center = {
  lat: 	50.866077,
  lng: 20.628569,
};

const LocationSection = () => {
  return (
    <div className='mt-3'>
      <h4>Location</h4>
      <LoadScript
        googleMapsApiKey="AIzaSyBblQlMGe6mX3VputCFpVe1DAmO7NtUfHU"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        >
          <></>
        </GoogleMap>
      </LoadScript>
    </div>

  );
};

export default LocationSection;
