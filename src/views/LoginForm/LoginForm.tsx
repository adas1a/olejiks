import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Formik, Form } from 'formik';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { TextField } from '../../components/inputs/TextField';
import { toast } from 'react-toastify';
import { LoginValidation } from '../../YupValidationSchemas/YupValidationSchemas';
import { toastify } from '../../utils/ToastifyVariants/ToastifyVariants';

interface LoginModel {
  email: string,
  password: string,
}

const initialValues: LoginModel = {
  email: '',
  password: '',
};

const LoginForm:React.FC = () => {

  const history = useHistory();

  const handleLogin = async (values:LoginModel) => {
    try {
      const res = await axios.post('auth/login', values);
      const { accessToken } = res?.data;
      axios.defaults.headers = { Authorization: `Bearer ${accessToken}` };
      localStorage.setItem('token', accessToken);
      toastify('success', res?.data.message);

    } catch (error) {
      toastify('error', error.response.data.message);

      localStorage.removeItem('token');
      axios.defaults.headers = {};
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleLogin}
      validationSchema={LoginValidation}
     >
      {(formik) => (
        <Container>
          <Form className='mt-3'>
            <TextField label='Email' name='email' type='email' placeholder='Enter email address'/>
            <TextField label='Password' name='password' type='password' placeholder='Enter your password'/>
            <Row>
              <Button variant='link' className='mb-3' onClick={() => history.replace('/register')}>Not registered? Create an account</Button>
            </Row>
            <Row>
              <Button variant="primary" type="submit">
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
