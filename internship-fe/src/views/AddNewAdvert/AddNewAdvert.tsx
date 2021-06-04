import React from 'react';
import { Formik, Form } from 'formik';
import { Button, Container } from 'react-bootstrap';
import  { TextField }  from '../../components/inputs/TextField';
import { CategoryField } from '../../components/inputs/CategoryField';
import { DescriptionField } from '../../components/inputs/DescriptionField';
import { CheckboxField } from '../../components/inputs/CheckboxField';
import { AddNewFormValidation } from './AddNewFormValidation/AddNewFormValidation';

const initialValues = {
  advertTitle: '',
  category: '',
  description:'',
  location:'',
  sellerName:'',
  email: '',
  number:'',
  acceptTerms:false,
};

const AddNewAdvert = () => (
    <Formik
      initialValues={initialValues}
      validationSchema={AddNewFormValidation}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {(formik) => (
          <Container>
            <Form>
              <h2>Add an advert</h2>
              <h5>The more details, the better!</h5>
              <TextField label="Advert Title" name="advertTitle" type="text" />
              <CategoryField label='Category' name='category'/>
              <TextField label="DO THE PHOTO UPLOAD SYSTEM" name="x"/>
              <DescriptionField label='Description' name='description'/>

              <h2>Contact Details</h2>

              <TextField label="Location" name="location" type="text" />
              <TextField label="Seller name" name="sellerName" type="text" />
              <TextField label="E-mail address" name="email" type="email" />
              <TextField label="Phone number" name="number" type="number" />

              <CheckboxField label="I consent to the use by the OLEJIKS Group sp. Z oo of electronic communication means and telecommunications terminal devices for the purpose of sending me commercial information and conducting marketing (e.g. newsletter, SMS messages) by the OLEJIKS Group sp. Z oo, related entities and business partners."
                             type='checkbox'  name='acceptTerms'/>
              <Button className="mt-3" variant="primary" type="submit" >Submit</Button>
            </Form>
          </Container>
        )}
      </Formik>
  );
export default AddNewAdvert;
