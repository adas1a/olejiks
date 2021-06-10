import React from 'react';
import {ErrorMessage, useField} from 'formik';
import {Form} from 'react-bootstrap';

interface CategoryFieldInterface {
  label: string
  name: string
}

export const CategoryField: React.FC<CategoryFieldInterface> = ({label, ...props}) => {

  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label htmlFor={field.name}>{label}</label>
      <select
        className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      >
        <option value=''>Select Category</option>
        <option value='1' id='electronics'>Electronics</option>
        <option value='2' id='cars'>Cars</option>
        <option value='3' id='dupa'>Dupa</option>
      </select>
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
