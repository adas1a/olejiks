import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';

interface DescriptionFieldInterface{
  label:string
  name:string
  type?:string
  as?:string
}
export const DescriptionField: React.FC<DescriptionFieldInterface> = ({ label, ...props }) =>{

  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <textarea
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off" rows={5} cols={50}
      />
      <ErrorMessage name={field.name}>
        {(err) => (
          <Form.Control.Feedback type="invalid">
            {err}
          </Form.Control.Feedback>
        )}
      </ErrorMessage>

    </div>
  )
}