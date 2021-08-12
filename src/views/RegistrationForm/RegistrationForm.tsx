import React from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import axios from 'axios';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { AddNewFormValidation } from '../AddNewAdvert/AddNewFormValidation/AddNewFormValidation';
import { TextField } from '../../components/inputs/TextField';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa29sYWoud2lkYW5rYUBnbWFpbC5jb20iLCJpZCI6IjU5NDUzYmVhLWRhNDQtNGM0Zi1iYTYxLThlNjhjZWVkNjU2NyIsImlhdCI6MTYyNjI5MDA1OSwiZXhwIjoxNjI2MjkzNjU5fQ.5jyKFYlhoVyh4KLZT67HwND7dy0BgjSy4MKwO1gNTyk';
// localStorage.setItem('token', token);
//
// axios.defaults.headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};
// localStorage.removeItem('token');

interface AddNewRegisterModel {
  email: string,
  password: string,
  confirmPassword: string,
}

const initialValues: AddNewRegisterModel = {
  email: '',
  password: '',
  confirmPassword: '',
};

const handleRegister = async (values:AddNewRegisterModel) => {
  // @ts-ignore
  event.preventDefault();
  try {
    const res = await axios.post('/api/auth/register', values);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  console.log(values);
};

const RegistrationForm = () => {
  const history = useHistory();
  return (
  <Formik
    initialValues={initialValues}
    validationSchema={AddNewFormValidation}
    onSubmit={handleRegister}>

    {(formik) => (
      <Container>
        <Form className='mt-3'>
          <TextField label='Email' name='email' type='email' placeholder='Enter email address'/>
          <TextField label='Password' name='password' type='password' placeholder='Enter your password'/>
          <TextField label='Confirm Password' name='confirmPassword' type='password' placeholder='Confirm password'/>
          <Row>
            <Button variant='link' className='mb-3' onClick={() => history.replace('/login')}>Already registered? Login to your account.</Button>
          </Row>
          <Row>
            <Button variant="primary" onClick={() => handleRegister(formik.values)} type="submit">
              Submit
            </Button>
          </Row>
        </Form>
      </Container>
    )}
  </Formik>
);};

export default RegistrationForm;
