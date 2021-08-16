import React from 'react';
import axios from 'axios';
import {Formik, Form, useFormik} from 'formik';
import { Button, Container } from 'react-bootstrap';
import  { TextField }  from '../../components/inputs/TextField';
import { CategoryField } from '../../components/inputs/CategoryField';
import { DescriptionField } from '../../components/inputs/DescriptionField';
import { AddNewFormValidation } from './AddNewFormValidation/AddNewFormValidation';
import { AddNewAdvertModel } from '../../interfaces/AddNewAdvertModel';
import PhotoInput from '../../components/inputs/PhotoInput';
import { LocationInput } from '../../components/inputs/LocationInput';

const initialValues:AddNewAdvertModel = {
  title: '',
  category: 'siema',
  description:'',
  photos:[],
  location:'',
  email: '',
  phone:'',
  price:0,
};

const handleSubmit = async (values:AddNewAdvertModel) => {
  try {
    await axios.post('/advertisement', values);
  } catch (error) {
    console.log('error: ', values);
    console.log('error: ', error.response.data.message);
  }
  console.log(values);
};

const AddNewAdvert = () => (
  <Formik
    initialValues={initialValues}
    validationSchema={AddNewFormValidation}
    onSubmit={handleSubmit}
  >
    {(formik) => (
      <Container>
        <Form>
          <h2>Add an advert</h2>
          <h5>The more details, the better!</h5>
          <TextField label="Advert Title" name="title" type="text" />
          <CategoryField label='Category' name='category'/>
          <PhotoInput label='Photos' name='photos' />
          <DescriptionField label='Description' name='description'/>
          <TextField label="Price" name="price" type='number' />

          <h2>Contact Details</h2>
          <LocationInput label="Location" name="location" type='text' />
          <TextField label="E-mail address" name="email" type="email" />
          <TextField label="Phone number" name="phone" type="text" />

          <Button className="mt-3" variant="primary" type="submit" >Submit</Button>
        </Form>
      </Container>
    )}
  </Formik>
);
export default AddNewAdvert;
