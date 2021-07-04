import React, {useEffect, useState} from 'react';
import {ErrorMessage, useField} from 'formik';
import {Form} from 'react-bootstrap';
import Axios from 'axios';
import CategoryInterface from '../../interfaces/CategoryInterface';

interface CategoryFieldInterface {
  label: string
  name: string
}

export const CategoryField: React.FC<CategoryFieldInterface> = ({label, ...props}) => {

    const [options, setOptions] = useState<CategoryInterface[]>([]);

    useEffect(()=>{
        const fetchData = async (): Promise<void> => {
          const {data} = await Axios.get<CategoryInterface[]>('/api/dictionaries/category');
            setOptions(data);
        };
        fetchData();
    },[]);

  const [field, meta] = useField(props);

  return (
    <div className="mb-2">
      <Form.Group controlId={field.name} >
        <Form.Label>{label}</Form.Label>
        <Form.Control as="select"   {...field} {...props} >
          <option value='' >Select</option>
          {options?.map((option)=>(
            <option key={option.id} value={option.id}>{option.name}</option>
          ))}
        </Form.Control>
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
