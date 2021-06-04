import React from 'react';
import { Formik, Form } from 'formik';
import { Container } from 'react-bootstrap';
import  { TextField }  from './Inputs/TextField';
import { CategoryField } from './Inputs/CategoryField';
import { DescriptionField } from './Inputs/DescriptionField';
import { CheckboxField } from './Inputs/CheckboxField';
import { AddNewFormValidation } from './AddNewFormValidation';

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

const AddNewAdvert = () => {

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={AddNewFormValidation}
      onSubmit={values => {
        console.log(values);
      }}
    >
      {(formik) => (
        <div>
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
              <button className="btn btn-dark mt-3" type="submit" >Submit</button>
            </Form>
          </Container>
        </div>

        )}
      </Formik>
  );
};
export default AddNewAdvert;
