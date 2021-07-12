import React from 'react';
import { Spinner } from 'react-bootstrap';

const Details = () => (
    <div>
      <h1>This is details page</h1>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );

export default Details;