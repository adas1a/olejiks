import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Form, Formik } from 'formik';
import axios from 'axios';
import { TextField } from '../../../components/inputs/TextField';
import { AdvertisementsResponse } from '../../../interfaces/AdvertisementsResponse';

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
  maxPrice: 999999999,
};

interface PropsInterface {
  posts:AdvertisementsResponse | undefined
  setPosts: React.Dispatch<React.SetStateAction<AdvertisementsResponse | undefined>>
  currentPage: number
  minPrice: number | undefined
  maxPrice: number | undefined
  setMinPrice: React.Dispatch<React.SetStateAction<number | undefined>>
  setMaxPrice: React.Dispatch<React.SetStateAction<number | undefined>>
}

const FiltersForm:React.FC<PropsInterface> = ({ posts, setPosts , minPrice, maxPrice, setMinPrice, setMaxPrice}) => {
  const [filters, setFilters] = useState<FiltersModelItem>();
  const [limit, setLimit] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchFilters = async (values:FiltersModelItem) => {
    try {
      const { data } = await axios.get<AdvertisementsResponse>('/advertisement', {
                params:{
                  maxPrice,
                  minPrice,
                  limit,
                  page: currentPage,
                },
              });
              console.log(data);
              setPosts(data);
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
              <Col>
                {/*zmienic textfield na nowy komponent bo potrzebne helpery formika*/}
                <TextField label='Category' name='category' placeholder='Enter category' type='text' />
              </Col>
              <Col>
                <TextField label='Min Price' name='minPrice' placeholder='Enter min price' type='number' />
              </Col>
              <Col>
                <TextField label='Max Price' name='maxPrice' placeholder='Enter max price' type='number' />
              </Col>
              <Col>
                {handleUserInput(formik.values.minPrice, formik.values.maxPrice)}
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