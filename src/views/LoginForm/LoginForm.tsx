import React, { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Formik, Form } from 'formik';
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

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa29sYWoud2lkYW5rYUBnbWFpbC5jb20iLCJpZCI6IjU5NDUzYmVhLWRhNDQtNGM0Zi1iYTYxLThlNjhjZWVkNjU2NyIsImlhdCI6MTYyNjI5MDA1OSwiZXhwIjoxNjI2MjkzNjU5fQ.5jyKFYlhoVyh4KLZT67HwND7dy0BgjSy4MKwO1gNTyk';
// localStorage.setItem('token', token);
// const token = localStorage.getItem('token');
//
// localStorage.removeItem('token');
const LoginForm:React.FC = () => {

  const history = useHistory();
  const [accessToken, setAccessToken] = useState('');
  axios.defaults.headers = { Authorization: `Bearer ${accessToken}` };

  const handleLogin = async (values:LoginModel) => {
    try {
      const res = await axios.post('auth/login', values,{
        headers:{
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setAccessToken(res?.data.accessToken);
      localStorage.setItem('token', res?.data.accessToken);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
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
