import React, { useEffect, useState } from 'react';
import { Container, Pagination } from 'react-bootstrap';
import axios from 'axios';
import { AdvertisementsResponse } from '../../../interfaces/AdvertisementsResponse';

interface PaginationInterface {
  posts: AdvertisementsResponse | undefined
  setPosts: React.Dispatch<React.SetStateAction<AdvertisementsResponse | undefined>>
  currentPage: number
  limit: number
}

const TablePagination:React.FC<PaginationInterface> = ({posts, setPosts}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [disablePrev, setDisablePrev] = useState(false);
  const [disableNext, setDisableNext] = useState(false);
  const active = currentPage;
  
  useEffect(() => {
    const fetchPagination = async (): Promise<void> => {
     try {
       const { data } = await axios.get<AdvertisementsResponse>('/advertisement', {
         params:{
           page:currentPage,
           limit,
         },
       });
       setPosts(data);
     } 
     catch (e) {
       console.error(e);
     }
    };
    fetchPagination();
  },[currentPage, limit]);
  
  const handlePaginationPrevious = ()=>{
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handlePaginationNext = ()=>{
    if (currentPage < pageLimit) {
      setCurrentPage(currentPage + 1);
    }
  };
  const pageLimit = Math.ceil((posts?.count || 0) / limit);

  const items = [];
  for (let number = 1; number <= pageLimit; number++) {
    items.push(
      <Pagination.Item onClick={() => setCurrentPage(number)} key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }
  console.log('active', active);
  const paginationBasic = (
    <Pagination>{items}</Pagination>
  );

  const handlePaginationDeactivate = () => {
    if(currentPage === pageLimit) {
      setDisableNext(true);
      setDisablePrev(false);
    }
    if(currentPage === 1) {
      setDisableNext(false);
      setDisablePrev(true);
    }
    if(currentPage > 1 || currentPage < pageLimit) {
      setDisablePrev(false);
      setDisableNext(false);
    }
  };
  return (
    <Container>
      <Pagination>
        <Pagination.First onClick={() => setCurrentPage(1)}/>
        <Pagination.Prev disabled={disablePrev} onClick={()=>{handlePaginationPrevious(); handlePaginationDeactivate();}}/>
        {paginationBasic}
        <Pagination.Next disabled={disableNext} onClick={()=>{handlePaginationNext(); handlePaginationDeactivate();}}/>
        <Pagination.Last onClick={() => setCurrentPage(pageLimit)}/>
      </Pagination>
    </Container>
  );
};

export default TablePagination;
