import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Container, Pagination, Table } from 'react-bootstrap';
import PostsInterface from '../../interfaces/PostsInterface';

const TablePagination:React.FC = () => {

  const [posts, setPosts] = useState<PostsInterface[]>();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [disable, setDisable] = useState(false);

  useEffect(() => {
    const fetchPosts = async (): Promise<void> => {
      try {
        setLoading(true);
        const { data } = await axios.get<PostsInterface[]>('/api/advertisement', {
        params:{
          page:currentPage,
          limit:5,
          orderBy: 'price',
        },
        });
        setPosts(data);
        setLoading(false);
      }
      catch (e) {
        console.error(e);
      }
    };
    fetchPosts();

  }, [currentPage]);

  const pageCount = posts? Math.ceil(posts.length/postsPerPage) :0;
  const active = currentPage;
  return (
    <Container className="container mt-5">
      <h1>Advertisments List</h1>
        <ul className="list-group mb-3">
        {posts?.map((postMap) => (
          <li key={postMap.id} className="list-group-item">{postMap.title}</li>
        ))}
        </ul>
      <Button disabled={disable} onClick={()=>{if(currentPage === 1 ){
        setCurrentPage(currentPage);
      }
      else {
      setCurrentPage(currentPage-1);
      }
      }} >Previous</Button>
      <Button disabled={disable} onClick={()=>{setCurrentPage(currentPage+1);}} >Next</Button>

      <Table bordered hover striped>
        <thead>
        <tr>
          <th>Photo</th>
          <th>Title</th>
          <th>Created</th>
          <th>Location</th>
        </tr>
        </thead>
        <tbody>
        {posts?.map((postMap) => (
          <tr key={postMap.id}>
            <td>{postMap.photos}</td>
            <td>{postMap.title}</td>
            <td>{postMap.created}</td>
            <td>{postMap.location}</td>
          </tr>
        ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev onClick={()=>{
          if (currentPage === 1 ) {
            setCurrentPage(currentPage);
          }
          else {
            setCurrentPage(currentPage - 1);
          }
        }}/>
          <Pagination.Item active={currentPage === active}>
            {currentPage}
          </Pagination.Item>
        <Pagination.Next onClick={()=>{
          if (currentPage > pageCount) {
            setCurrentPage(currentPage);
          } else {
            setCurrentPage(currentPage + 1);
          }
        }}/>
      </Pagination>
    </Container>
  );
};
export default TablePagination;
