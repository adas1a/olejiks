import React from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { Formik } from 'formik';
import axios from 'axios';
import { Redirect, useHistory } from 'react-router-dom';
import { AddNewFormValidation } from '../AddNewAdvert/AddNewFormValidation/AddNewFormValidation';
import { TextField } from '../../components/inputs/TextField';

interface LoginModel {
  email: string,
  password: string,
}

const initialValues: LoginModel = {
  email: '',
  password: '',
};

const handleLogin = async (values:LoginModel) => {
  // @ts-ignore
  event.preventDefault();
  try {
    const res = await axios.post('/api/auth/login', values);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
  console.log(values);
};

const LoginForm = () => {
  const history = useHistory();
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddNewFormValidation}
      onSubmit={handleLogin}>

      {(formik) => (
        <Container>
          <Form className='mt-3'>
            <TextField label='Email' name='email' type='email' placeholder='Enter email address'/>
            <TextField label='Password' name='password' type='password' placeholder='Enter your password'/>
            <Row>
              <Button variant='link' className='mb-3' onClick={() => history.replace('/register')}>Not registered? Create an account</Button>
            </Row>
            <Row>
              <Button variant="primary" onClick={() => handleLogin(formik.values)} type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default LoginForm;
