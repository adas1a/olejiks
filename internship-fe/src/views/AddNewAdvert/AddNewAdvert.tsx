import React, { useEffect } from 'react';
import axios from 'axios';
import { Formik, Form } from 'formik';
import { Button, Container } from 'react-bootstrap';
import  { TextField }  from '../../components/inputs/TextField';
import { CategoryField } from '../../components/inputs/CategoryField';
import { DescriptionField } from '../../components/inputs/DescriptionField';
import { CheckboxField } from '../../components/inputs/CheckboxField';
import { AddNewFormValidation } from './AddNewFormValidation/AddNewFormValidation';

const initialValues = {
  title: '',
  category: '',
  description:'',
  photos:[],
  location:'',
  // sellerName:'',
  email: '',
  phone:'1',
  // acceptTerms:false,
};

const AddNewAdvert = () => (

    <Formik
      initialValues={initialValues}
      validationSchema={AddNewFormValidation}
      onSubmit={() =>  axios.post('/api/advertisement', {
        title: 'asdasdasdasdasd',
        category: 123,
        photos:[0],
        description:'asdasdasdasdasdasdaaaaaaaaaaaasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttttestttttttttttttttttttttttttttttttttttttttttt',
        location:123,
        email:'siemagg@vp.pl',
        phone:'999888777',
      })
        .then( (response)=> {
          console.log(response);
        })
        .catch((error)=> {
          console.log(error);
        })
      }
    >
      {(formik) => (
          <Container>
            <Form>
              <h2>Add an advert</h2>
              <h5>The more details, the better!</h5>
              <TextField label="Advert Title" name="title" type="text" />
              <CategoryField label='Category' name='category'/>
              {/*<TextField label="DO THE PHOTO UPLOAD SYSTEM" name="x"/>*/}
              <DescriptionField label='Description' name='description'/>

              <h2>Contact Details</h2>

              <TextField label="Location" name="location" type="text" />
              {/*<TextField label="Seller name" name="sellerName" type="text" />*/}
              <TextField label="E-mail address" name="email" type="email" />
              <TextField label="Phone number" name="phone" type="number" />

              {/*<CheckboxField label="I consent to the use by the OLEJIKS Group sp. Z oo of electronic communication means and telecommunications terminal devices for the purpose of sending me commercial information and conducting marketing (e.g. newsletter, SMS messages) by the OLEJIKS Group sp. Z oo, related entities and business partners."*/}
              {/*               type='checkbox'  name='acceptTerms'/>*/}
              <Button className="mt-3" variant="primary" type="submit" >Submit</Button>
            </Form>
          </Container>
        )}
      </Formik>
  );
export default AddNewAdvert;
