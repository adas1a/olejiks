import React from 'react';
import { ErrorMessage, useField } from 'formik';
import { Form } from 'react-bootstrap';

interface TextFieldInterface {
  label: string;
  name: string;
  type?: 'text' | 'number' | 'email' | 'phone';
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
}

export const TextField: React.FC<TextFieldInterface> = ({ label, ...props }) => {

  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <Form.Group controlId={field.name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control  type="text"  {...field} {...props}
          isInvalid={!!(meta.touched && meta.error)} autoComplete='off'
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
