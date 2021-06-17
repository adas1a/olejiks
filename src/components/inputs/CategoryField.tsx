import React, {useEffect, useState} from 'react';
import {ErrorMessage, useField} from 'formik';
import {Form} from 'react-bootstrap';
import Axios from 'axios';

interface CategoryFieldInterface {
  label: string
  name: string
}

export const CategoryField: React.FC<CategoryFieldInterface> = ({label, ...props}) => {

    // const [options, setOptions] = useState();
    //
    // useEffect(()=>{
    //     const fetchData = async (): Promise<void> => {
    //       const {data} = await Axios.get('/api/advertisement');
    //         setOptions(data);
    //     };
    //     fetchData();
    // },[]);

  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      {/*<label htmlFor={field.name}>{label}</label>*/}
      {/*<select*/}
      {/*  className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}*/}
      {/*  {...field} {...props}*/}
      {/*  autoComplete="off"*/}
      {/*>*/}
      {/*  <option value=''>Select Category</option>*/}
      {/*  <option value='1' id='electronics'>Electronics</option>*/}
      {/*  <option value='2' id='cars'>Cars</option>*/}
      {/*  <option value='3' id='dupa'>Dupa</option>*/}
      {/*</select>*/}

      <Form.Group controlId={field.name} >
        <Form.Label>{label}</Form.Label>
        <Form.Control as="select"   {...field} {...props}  isInvalid={meta.touched && meta.error?true:false}>
          <option value=''>Select category</option>
          <option value='1' id='electronics'>Electronics</option>
          <option value='2' id='cars'>Cars</option>
          <option value='3' id='garden'>Garden</option>
          <option value='4' id='dupa'>Dupa</option>
        </Form.Control>
        <ErrorMessage name={field.name}>
          {(err) => (
            <Form.Control.Feedback type="invalid">
              {err}
              {console.log(err)}
            </Form.Control.Feedback>
          )}
        </ErrorMessage>
      </Form.Group>
    </div>
  );
};
