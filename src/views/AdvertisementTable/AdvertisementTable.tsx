import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Container, Image, Pagination, Table, Row, Col } from 'react-bootstrap';
import { Form } from 'formik';
import { AdvertisementsResponse } from '../../interfaces/AdvertisementsResponse';
import { TextField } from '../../components/inputs/TextField';
import FiltersForm from './FiltersForm/FiltersForm';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa29sYWoud2lkYW5rYUBnbWFpbC5jb20iLCJpZCI6IjU5NDUzYmVhLWRhNDQtNGM0Zi1iYTYxLThlNjhjZWVkNjU2NyIsImlhdCI6MTYyNjI5MDA1OSwiZXhwIjoxNjI2MjkzNjU5fQ.5jyKFYlhoVyh4KLZT67HwND7dy0BgjSy4MKwO1gNTyk';
// localStorage.setItem('token', token);
//
// axios.defaults.headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};
// // localStorage.removeItem('token');

const AdvertisementTable:React.FC = () => {
  const [posts, setPosts] = useState<AdvertisementsResponse>();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [orderBy, setOrderBy] = useState('created');
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const [orderOption, setOrderOption] = useState('DESC');
  const history = useHistory();
  const active = currentPage;

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      try {
        const { data } = await axios.get<AdvertisementsResponse>('/api/advertisement', {
        params:{
          page:currentPage,
          limit,
          orderBy,
          orderOption,
        }, 
          // headers: {
          //   Authorization: `Bearer ${localStorage.getItem('token')}`
          // },
        });
        setPosts(data);
      }
      catch (e) {
        console.error(e);
      }
    };
    fetchPosts();
  }, [currentPage, limit, orderBy, orderOption]);
  
  const handlePaginationPrevious = ()=>{
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setDisablePrev(false);
      setDisableNext(false);
    }
    else {
      setDisablePrev(true);
      setDisableNext(false);
    }
  };

  const handlePaginationNext = ()=>{
    if (currentPage >= Math.floor((posts?.count || 0) / limit)) {
      setDisableNext(true);
      setDisablePrev(false);
    }
    else {
      setCurrentPage(currentPage + 1);
      setDisableNext(false);
      setDisablePrev(false);
    }
  };

  const handleOrderBy = (order: string) => {
    setOrderBy(order);
    if (orderOption === 'ASC') {
      setOrderOption('DESC');
    }
    else {
      setOrderOption('ASC');
    }
  };

  const handleOrderIcon = (order: string) => {
    if (orderBy === order) {
      if (orderOption === 'ASC') {
        return <i className="bi bi-sort-up" />;
      }
        return <i className="bi bi-sort-down" />;
    }
  };

  const pageLimit = Math.floor((posts?.count || 0) / limit);

  const items = [];
    for (let number = 1; number <= pageLimit; number++) {
      items.push(
        <Pagination.Item onClick={() => setCurrentPage(number)} key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }

  const paginationBasic = (
      <Pagination>{items}</Pagination>
  );

  return (
    <Container className="container mt-5">
      <h1>Advertisements List</h1>
      <h2>Filter options: </h2>
      <FiltersForm />
      <Table bordered hover striped responsive>
        <thead>
        <tr>
          <th>Photo</th>
          <th onClick={ () => handleOrderBy('title') }>Title { handleOrderIcon('title') }</th>
          <th onClick={ () => handleOrderBy('created') }>Created { handleOrderIcon('created') }</th>
          <th onClick={ () => handleOrderBy('location') }>Location { handleOrderIcon('location') }</th>
          <th onClick={ () => handleOrderBy('price') }>Price { handleOrderIcon('price') }</th>
        </tr>
        </thead>
        <tbody>
        {posts?.list?.map((postMap) => (
          <tr key={postMap.id} onClick={()=>{
            history.push(`/details/${postMap.id}`);
          }}>
            <td><Image className = 'photoAdsStyle' src={ postMap.photos?.slice(0,1).toString() } alt = 'Photo is not available' /></td>
            <td>{postMap.title}</td>
            <td>{postMap.created?.split('T')[0]} at {postMap.created?.split('T')[1].split('.')[0]}</td>
            <td>{postMap.location}</td>
            <td>{postMap.price}</td>
          </tr>
        ))}
        </tbody>
      </Table>
      <Pagination>
        <Pagination.First onClick={() => setCurrentPage(1)}/>
        <Pagination.Prev disabled={disablePrev} onClick={handlePaginationPrevious}/>
          {paginationBasic}
        <Pagination.Next disabled={disableNext} onClick={handlePaginationNext}/>
        <Pagination.Last onClick={() => setCurrentPage(pageLimit)}/>
      </Pagination>
    </Container>
  );
};
export default AdvertisementTable;
