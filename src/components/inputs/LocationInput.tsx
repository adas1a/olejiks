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
        const {data} = await axios.get<CityModel[]>('/api/dictionaries/cities');
        data?.map((city)=>(
          setCities(prevCity => [...prevCity, city])
        ));
      }catch (e){
        console.error(e);
      }
    };
    fetchData();
  },[]);

  const handleMatches = (input:string) => {
    if(!input){
      setCityMatches([]);
    }
    const matches = cities.filter((city)=>{
      const regex = new RegExp(`${input}`, 'gi');
        return city?.name.match(regex);
      });
    setCityMatches(matches);
  };
  const handleBlur1 = () => {
    setCityMatches([]);
  };
  const handleClick = (item:string) => {
    setFieldValue('location', item);
    setCityMatches([]);
  };
  // const nowyOnBlur = () => {
  //   handleBlur1();
  //   field.onBlur;
  // }
  return (
    <div className="mb-2">
      <Form.Group controlId={field.name}>
        <Form.Label>{label}</Form.Label>
        <Form.Control  type="text"
                       {...field} autoComplete="off"
                       onInput={(event:any) => handleMatches(event.target.value)}
                       onBlur={field.value.length < 3 ? field.onBlur : handleBlur1}
                       isInvalid={!!(meta.touched && meta.error)}
        />
        {cityMatches && cityMatches.map((item, index)=>(
          <Card onClick={()=>{handleClick(item.name);}}>
              {item.name}
          </Card>
        ))}

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