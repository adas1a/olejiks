import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import axios from 'axios';
import { TextField } from '../../../components/inputs/TextField';

interface FiltersModelItem {
  minPrice: number,
  maxPrice: number,
}

interface FiltersModel {
  list: FiltersModelItem[],
  count: number
}

const initialValues: FiltersModelItem = {
  minPrice: 0,
  maxPrice: 0,
};

const FiltersForm:React.FC = () => {
  const [filters, setFilters] = useState<FiltersModelItem>();
  const [maxPrice, setMaxPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);

  const fetchFilters = async (values:FiltersModelItem) => {
    try {
      const { data } = await axios.get<FiltersModelItem>('/api/advertisement', {
                params:{
                  maxPrice,
                  minPrice,
                },
              });
              console.log(data);
              setFilters(data);
    } catch (error) {
      console.log('error: ', values);
      console.log('error: ', error.response.data.message);
    }
    console.log(values);
  };

  const handleUserInput =  (min: number, max: number) => {
     setMinPrice(min);
     setMaxPrice(max);
    console.log(minPrice, maxPrice);
  };
  console.log(filters);
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={fetchFilters}>
      {(formik) => (
        <Container>
          <Form>
            <Row>
              {handleUserInput(formik.values.minPrice, formik.values.maxPrice)}
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