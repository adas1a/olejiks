import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form, Formik, useField, useFormik, useFormikContext } from 'formik';
import axios from 'axios';
import { TextField } from '../../../components/inputs/TextField';
import { AddNewFormValidation } from '../../AddNewAdvert/AddNewFormValidation/AddNewFormValidation';

interface FiltersModelItem {
  minPrice: undefined,
  maxPrice: undefined,
}

interface FiltersModel {
  list: FiltersModelItem[],
  count: number
}

const initialValues: FiltersModelItem = {
  minPrice: undefined,
  maxPrice: undefined,
};

const FiltersForm:React.FC = () => {
  const [filters, setFilters] = useState<FiltersModelItem>();
  const [maxPrice, setMaxPrice] = useState();
  const [minPrice, setMinPrice] = useState();

  useEffect(()=> {
    const fetchFilters = async (): Promise<void> => {
      try {
        const { data } = await axios.get<FiltersModelItem>('/api/advertisement', {
          params:{
            maxPrice,
            minPrice,
          },
        });
        setFilters(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFilters();
  }, [minPrice, maxPrice]);

  const handleUserInput = (min: undefined, max: undefined) => {
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={() => console.log(filters)}>
      {(formik) => (
        <Container>
          <Form onSubmit={()=>handleUserInput(formik.values.minPrice, formik.values.maxPrice)}>
            <Row>
              <Col>
                <TextField label='Category' name='category' placeholder='Enter category' type='text' />
              </Col>
              <Col>
                <TextField label='Min Price' name='minPrice' placeholder='Enter min price' type='number' />
              </Col>
              <Col>
                <TextField label='Max Price' name='maxPrice' placeholder='Enter max price' type='number' />
              </Col>
              <Col>
                <Button className='mt-3' variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      )}
    </Formik>
  );
};
export default FiltersForm;