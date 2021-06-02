import React from 'react';
import { ErrorMessage, useField } from 'formik';

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

      <ErrorMessage component="div" name={field.name} className="error" />

    </div>
)
}

