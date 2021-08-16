import React, { useEffect, useState } from 'react';
import { ErrorMessage, useField, useFormikContext, useFormik } from 'formik';
import { Card, Form } from 'react-bootstrap';
import axios from 'axios';
import { AddNewAdvertModel } from '../../interfaces/AddNewAdvertModel';

interface LocationInputInterface {
  label: string;
  name: string;
  type?: 'text' | 'number' | 'email' | 'phone';
  inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
}

interface CityModel{
  cityId:string;
  name:string;
  voivodeship:string;
  coordinates:CoordinatesModel[];
}
interface CoordinatesModel{
  latitude:number;
  longitude:number
}
export const LocationInput: React.FC<LocationInputInterface> = ({ label, ...props }) => {

  const [field, meta] = useField(props);
  const {values, setFieldValue} = useFormikContext<AddNewAdvertModel>();
  const [cities, setCities] = useState<CityModel[]>([]);
  const [cityMatches, setCityMatches] = useState<CityModel[]>([]);
  useEffect( () => {
    const fetchData = async ():Promise<void> => {
      try{
        const {data} = await axios.get<CityModel[]>('/dictionaries/cities');
        data?.map((city)=>(
          setCities(prevCity => [...prevCity, city])
        ));
      }catch (e){
        console.error(e);
      }
    };
    fetchData();
  },[]);
  return (
    <div className="mb-2">
      <Form.Group controlId={field.name} >
        <Form.Label>{label}</Form.Label>
        <Form.Control as="select" {...field} >
          <option value='' >Select</option>
          {cities?.map((city)=>(
            <option key={city.cityId} value={city.name}>{city.name}</option>
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