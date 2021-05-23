import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useFormik } from 'formik'
import {unstable_renderSubtreeIntoContainer} from "react-dom";


const AddNewAdvert = () => {

  const formik = useFormik({
    initialValues: {
      advertTitle: '',
      category: '',
      photos: '',
      description: '',
      location:'',
      person:'',
      number:'',
      checkbox:''
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));
    },
  });
  console.log(formik.values)

  return (

    <Container>
      <Form className={'m-5'}>

        <Form.Group controlId="advertTitle">
          <Form.Label>Advert Title</Form.Label>
          <Form.Control
              type="text"
              name='advertTitle'
              placeholder="iphone 11 plus"
              onChange={formik.handleChange}
              value={formik.values.advertTitle}
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control
              as="select"
              name='category'
              onChange={formik.handleChange}
              value={formik.values.category}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="photos">
          <Form.Label>Photos</Form.Label>
          <Form.File
              name='photos'
              onChange={formik.handleChange}
              value={formik.values.photos}
          />
        </Form.Group>

        <Form.Group controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
              as="textarea"
              rows={5}
              name='description'
              onChange={formik.handleChange}
              value={formik.values.description}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Location</Form.Label>
          <Form.Control
              type='text'
              name='location'
              onChange={formik.handleChange}
              value={formik.values.location}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Seller Name</Form.Label>
          <Form.Control
              type='text'
              name='person'
              onChange={formik.handleChange}
              value={formik.values.person}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Number</Form.Label>
          <Form.Control
              type='number'
              name='number'
              onChange={formik.handleChange}
              value={formik.values.number}
          />
        </Form.Group>

        <Form.Group controlId="accept">
          <Form.Check
              type="checkbox"
              label="accept term & conditions"
              onChange={formik.handleChange}
              value={formik.values.checkbox}
          />
        </Form.Group>

        <Button variant="primary" type="submit">Review Advert</Button>

        <Button variant="primary" type="submit">Submit</Button>

      </Form>




    </Container>
  );
};

export default AddNewAdvert;