import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { AddNewFormValidation } from '../AddNewAdvert/AddNewFormValidation/AddNewFormValidation';
import { Formik } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
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
            <Form.Text className='mb-3' onClick={() => history.push('/register')}>Not registered? Create an account</Form.Text>
            <Button variant="primary" onClick={() => handleLogin(formik.values)} type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </Formik>
  );
};

export default LoginForm;