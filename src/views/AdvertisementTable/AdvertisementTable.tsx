import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Container, Pagination, Table } from 'react-bootstrap';
import { AdvertisementsResponse } from '../../interfaces/AdvertisementsResponse';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const AdvertisementTable:React.FC = () => {

  const [posts, setPosts] = useState<AdvertisementsResponse>();
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [orderBy, setOrderBy] = useState('price');
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

  return (
    <Container className="container mt-5">
      <h1>Advertisements List</h1>

      <Table bordered hover striped>
        <thead>
        <tr>
          <th>Photo</th>
          <th onClick={ () => handleOrderBy('title') }>Title</th>
          <th onClick={ () => handleOrderBy('created') }>Created</th>
          <th onClick={ () => handleOrderBy('location') }>Location</th>
        </tr>
        </thead>
        <tbody>
        {posts?.list?.map((postMap) => (
          <tr key={postMap.id} onClick={()=>{
            history.push('/details');
          }}>
            <td>{postMap.photos}</td>
            <td>{postMap.title}</td>
            <td>{postMap.created}</td>
            <td>{postMap.location}</td>
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
