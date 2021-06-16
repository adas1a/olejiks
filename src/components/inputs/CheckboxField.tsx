import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';

interface CheckboxFieldInterface{
  label:string
  name:string
  type:string
}
export const CheckboxField: React.FC<CheckboxFieldInterface> = ({ label, ...props }) =>{

  const [field, meta] = useField(props);

  return (
    <div className="mb-2 ">
      <input className={` mr-1 shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
             {...field} {...props}
             autoComplete="off"
      />
      <label htmlFor={field.name}>{label}</label>

      <ErrorMessage name={field.name}>
        {(err) => (
          <Form.Control.Feedback type="invalid">
            {err}
          </Form.Control.Feedback>
        )}
      </ErrorMessage>

    </div>
);
};
