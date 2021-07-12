import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Button, Container, Pagination, Table } from 'react-bootstrap';
import PostsInterface from '../../interfaces/PostsInterface';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

const AdvertisementTable:React.FC = () => {

  const [posts, setPosts] = useState<PostsInterface[]>([]);
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

  const history = useHistory();

  const pageCount = posts? Math.ceil(posts.length/postsPerPage) :0;
  const active = currentPage;
  return (
    <Container className="container mt-5">
      <h1>Advertisements List</h1>

      <Table bordered hover striped>
        <thead>
        <tr>
          <th>Photo</th>
          <th onClick={()=>{history.push('/details');}}>Title</th>
          <th onClick={()=>{history.push('/details');}}>Created</th>
          <th onClick={()=>{history.push('/details');}}>Location</th>
        </tr>
        </thead>
        <tbody>
        {posts?.map((postMap) => (
          <tr key={postMap.list.id} onClick={()=>{
            history.push('/details');
          }}>
            <td>{postMap.list.photos}</td>
            <td>{postMap.list.title}</td>
            <td>{postMap.list.created}</td>
            <td>{postMap.list.location}</td>
          </tr>
        ))}
        </tbody>
      </Table>

      <Pagination>
        <Pagination.Prev onClick={()=>{
          if (currentPage > 1) {
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
export default AdvertisementTable;
