import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Image, Pagination, Table } from 'react-bootstrap';
import { Form } from 'formik';
import { AdvertisementsResponse } from '../../interfaces/AdvertisementsResponse';
import { TextField } from '../../components/inputs/TextField';
import FiltersForm from './FiltersForm/FiltersForm';
import TablePagination from './TablePagination/TablePagination';
import MainTable from './MainTable';

const AdvertisementTable:React.FC = () => {
  const [posts, setPosts] = useState<AdvertisementsResponse>();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [orderBy, setOrderBy] = useState('created');
  const [orderOption, setOrderOption] = useState('DESC');
  const [maxPrice, setMaxPrice] = useState<undefined | number>();
  const [minPrice, setMinPrice] = useState<undefined | number>();
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      try {
        const { data } = await axios.get<AdvertisementsResponse>('/advertisement', {
        params:{
          page:currentPage,
          limit,
          orderBy,
          orderOption,
          minPrice,
          maxPrice,
        },
        });
        setPosts(data);
      }
      catch (e) {
        console.error(e);
      }
    };
    fetchPosts();
  }, [currentPage, limit, orderBy, orderOption]);
  return (
    <Container className="container mt-5">
      <h1>Advertisements List</h1>
      <h2>Filter options: </h2>
      <FiltersForm posts={posts} setPosts={setPosts} currentPage={currentPage} minPrice={minPrice} maxPrice={maxPrice} setMinPrice={setMinPrice} setMaxPrice={setMaxPrice}/>
      <MainTable posts={posts} setPosts={setPosts} orderBy={orderBy} orderOption={orderOption}/>
      <TablePagination posts={posts} setPosts={setPosts} currentPage={currentPage} limit={limit} />
    </Container>
  );
};
export default AdvertisementTable;
