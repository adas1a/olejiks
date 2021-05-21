import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';

interface Props{
  // title: string;
}

const AddNewAdvert:React.FC<Props>= () => {
  return (
    <Container>
      <Form className={'m-5'}>
        <Form.Group controlId="advertTitle">
          <Form.Label>Advert Title</Form.Label>
          <Form.Control type="text" placeholder="iphone 11 plus" />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="photos">
          <Form.Label>Photos</Form.Label>
          <Form.File id="exampleFormControlFile1" />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>

        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control id="location" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Seller Name</Form.Label>
          <Form.Control id="person" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Number</Form.Label>
          <Form.Control id="number" />
        </Form.Group>

        <Form.Group controlId="accept">
          <Form.Check type="checkbox" label="accept term & conditions" />
        </Form.Group>

        <Button variant="primary" type="submit">Review Advert</Button>

        <Button variant="primary" type="submit">Submit</Button>

      </Form>




    </Container>
  );
};

export default AddNewAdvert;