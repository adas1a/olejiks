import React from 'react';
import { ErrorMessage, useField } from 'formik';

interface CategoryFieldInterface{
  label:string
  name:string
}
export const CategoryField: React.FC<CategoryFieldInterface> = ({ label, ...props }) =>{

  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
    <label htmlFor={field.name}>{label}</label>
      <select
  className={`form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
  {...field} {...props}
  autoComplete="off"
      >
        <option>Select Category</option>
        <option value='electronics' id='electronics'>Electronics</option>
        <option value='cars' id='cars'>Cars</option>
        <option value='dupa' id='dupa'>Dupa</option>
      </select>
  <ErrorMessage component="div" name={field.name} className="error" />

    </div>
)
}