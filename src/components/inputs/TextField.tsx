import React, { useEffect, useState } from 'react';
import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';
import { stat } from 'fs';

interface TextFieldInterface {
  label: string;
  name: string;
  type?: 'text' | 'number' | 'email' | 'phone';
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
}

export const TextField: React.FC<TextFieldInterface> = ({ label, ...props }) => {

  const [field, meta] = useField(props);
  const[issInvalid, setIsInvalid]=useState(false);



  return (
    <div className="mb-2">
      {/*<label htmlFor={field.name}>{label}</label>*/}
      {/*<input*/}
      {/*  className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}*/}
      {/*  {...field} {...props}*/}
      {/*  autoComplete="off"*/}
      {/*/>*/}
      <Form.Group controlId={field.name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control  type="text"  {...field} {...props}
          isInvalid={meta.touched && meta.error?true:false}
        />
        <ErrorMessage name={field.name}>
          {(err) => (
            <Form.Control.Feedback type="invalid">
              {err}
            </Form.Control.Feedback>
          )}
        </ErrorMessage>


      </Form.Group>



    </div>
  );
};
