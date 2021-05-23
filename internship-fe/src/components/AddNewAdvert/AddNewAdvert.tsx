import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useFormik } from 'formik'
import {FormikErrors } from 'formik';

interface FormValues {
  advertTitle: string;
  category: string;
  description: string;
  location: string;
  person: string;
  photos: any;
  number: string;
  accept: boolean;
}

const AddNewAdvert = () => {

  const formik = useFormik({
    initialValues: {
      advertTitle: '',
      category: '',
      photos: '',
      description: '',
      location:'',
      person:'',
      number: '',
      accept: false
    },
    onSubmit: values => {
      console.log(values);
    },
    validate: (values: FormValues) => {
      let errors: FormikErrors<FormValues> = {};
      if (!values.advertTitle) {
        errors.advertTitle = 'Required';
      }
      if (!values.category) {
        errors.category = 'Required';
      }
      if (!values.description) {
        errors.description = 'Required';
      }
      if (!values.location) {
        errors.location = 'Required';
      }
      if (!values.person) {
        errors.person = 'Required';
      }
      if (values.accept) {
        errors.accept = 'Required';
      }
      let regex =  /^\d{9}$/;
      if (!values.number) {
        errors.number = 'Required';
      }
      else if (!regex.test(values.number)) {
        errors.number = 'Invalid phone number'
      }
      return errors;
    }

  });

  console.log(formik.errors)
  return (

      <Container className={'pt-1'}>
        <Form className='' onSubmit={formik.handleSubmit}>

          <Form.Group controlId="advertTitle">
            <Form.Label>Advert Title</Form.Label>
            <Form.Control
                type="text"
                name='advertTitle'
                placeholder="iphone 11 plus"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.advertTitle}
            />
          </Form.Group>

          {formik.touched.advertTitle && formik.errors.advertTitle ? <div className='error'>{formik.errors.advertTitle}</div> : null}

          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control
                as="select"
                name='category'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.category}
            >
              <option>Cars</option>
              <option>Electronics</option>
              <option>Lorem</option>
              <option>xd</option>
              <option>gagasdw</option>
            </Form.Control>
          </Form.Group>

          {formik.touched.category && formik.errors.category ? <div className='error'>{formik.errors.category}</div> : null}


          <Form.Group controlId="photos">
            <Form.Label>Photos</Form.Label>
            <Form.File
                name='photos'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
                value={formik.values.description}
            />
          </Form.Group>

          {formik.touched.description && formik.errors.description ? <div className='error'>{formik.errors.description}</div> : null}

          <Form.Group controlId='location'>
            <Form.Label>Location</Form.Label>
            <Form.Control
                type='text'
                name='location'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.location}
            />
          </Form.Group>

          {formik.touched.location && formik.errors.location ? <div className='error'>{formik.errors.location}</div> : null}

          <Form.Group controlId='person'>
            <Form.Label>Seller Name</Form.Label>
            <Form.Control
                type='text'
                name='person'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.person}
            />
          </Form.Group>

          {formik.touched.person && formik.errors.person ? <div className='error'>{formik.errors.person}</div> : null}

          <Form.Group controlId='number'>
            <Form.Label>Number</Form.Label>
            <Form.Control
                type='number'
                name='number'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.number}
            />
          </Form.Group>

          {formik.touched.number && formik.errors.number ? <div className='error'>{formik.errors.number}</div> : null}



          <Form.Group controlId="accepti">
            <Form.Check
                type="checkbox"
                label="accept term & conditions"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
          </Form.Group>

          {formik.touched.accept && formik.errors.accept ? <div className='error'>{formik.errors.accept}</div> : null}

          <Button variant="primary">Review Advert</Button>

          <Button variant="primary" type="submit">Submit</Button>

        </Form>

      </Container>
  );
};

export default AddNewAdvert;

// function checkIfTouched() {
//   for( let x in formik.values){
//     console.log(formik.touched[x]);
//     return x;
//     // formik.touched.x && formik.errors.x ? <div className='error'>{formik.errors.x}</div> : null
//   }
// }
