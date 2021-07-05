import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {Formik, Form, useFormik} from 'formik';
import { Button, Container } from 'react-bootstrap';
import  { TextField }  from '../../components/inputs/TextField';
import { CategoryField } from '../../components/inputs/CategoryField';
import { DescriptionField } from '../../components/inputs/DescriptionField';
import { CheckboxField } from '../../components/inputs/CheckboxField';
import { AddNewFormValidation } from './AddNewFormValidation/AddNewFormValidation';
import { Advertisement } from '../../interfaces/Advertisement';
import { AddNewAdvertModel } from '../../interfaces/AddNewAdvertModel';
import PhotoInput from '../../components/inputs/PhotoInput';

const initialValues:AddNewAdvertModel = {
  title: '',
  category: '',
  description:'',
  photos:[],
  location:'',
  email: '',
  phone:'',
  price:0,
};


const handleSubmit = async (values:AddNewAdvertModel) => {
  try {
    await axios.post('/api/advertisement', values);
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
          <TextField label="Location" name="location" type='text' />
          {/*<TextField label="Seller name" name="sellerName" type="text" />*/}
          <TextField label="E-mail address" name="email" type="email" />
          <TextField label="Phone number" name="phone" type="text" />

          {/*<CheckboxField label="I consent to the use by the OLEJIKS Group sp. Z oo of electronic communication means and telecommunications terminal devices for the purpose of sending me commercial information and conducting marketing (e.g. newsletter, SMS messages) by the OLEJIKS Group sp. Z oo, related entities and business partners."*/}
          {/*               type='checkbox'  name='acceptTerms'/>*/}
          <Button className="mt-3" variant="primary" type="submit" >Submit</Button>
        </Form>
      </Container>
    )}
  </Formik>
);
export default AddNewAdvert;



