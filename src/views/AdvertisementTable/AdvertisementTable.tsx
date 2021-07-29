import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';
import { Container, Image, Pagination, Table } from 'react-bootstrap';
import { AdvertisementsResponse } from '../../interfaces/AdvertisementsResponse';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa29sYWoud2lkYW5rYUBnbWFpbC5jb20iLCJpZCI6IjU5NDUzYmVhLWRhNDQtNGM0Zi1iYTYxLThlNjhjZWVkNjU2NyIsImlhdCI6MTYyNjI5MDA1OSwiZXhwIjoxNjI2MjkzNjU5fQ.5jyKFYlhoVyh4KLZT67HwND7dy0BgjSy4MKwO1gNTyk';
// localStorage.setItem('token', token);
//
// axios.defaults.headers = {Authorization: `Bearer ${localStorage.getItem('token')}`};
// // localStorage.removeItem('token');

const AdvertisementTable:React.FC = () => {
  const [posts, setPosts] = useState<AdvertisementsResponse>();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [orderBy, setOrderBy] = useState('title');
  const [orderOption, setOrderOption] = useState('ASC');
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
    }
  };

  const handlePaginationNext = ()=>{
    if (currentPage > Math.floor((posts?.count || 0) / limit)) {
      setCurrentPage(currentPage);
    }
    else {
      setCurrentPage(currentPage + 1);
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
  
  return (
    <Container className="container mt-5">
      <h1>Advertisements List</h1>

      <Table bordered hover striped>
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
            <td>{postMap.created}</td>
            <td>{postMap.location}</td>
            <td>{postMap.price}</td>
          </tr>
        ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev onClick={handlePaginationPrevious}/>
          <Pagination.Item active={currentPage === active}>
            {currentPage}
          </Pagination.Item>
        <Pagination.Next onClick={handlePaginationNext}/>
      </Pagination>
    </Container>
  );
};
export default AdvertisementTable;
