import React, { useEffect, useState } from 'react';
import { Container, Image, Table } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { AdvertisementsResponse } from '../../interfaces/AdvertisementsResponse';

interface MainTableInterface {
  posts: AdvertisementsResponse | undefined
  setPosts: React.Dispatch<React.SetStateAction<AdvertisementsResponse | undefined>>
  orderBy: string
  orderOption: string
}

const MainTable:React.FC<MainTableInterface> = ({ posts, setPosts }) => {
  const [orderBy, setOrderBy] = useState('created');
  const [orderOption, setOrderOption] = useState('DESC');
  const history = useHistory();

  useEffect(() => {
    const fetchTable = async (): Promise<void> => {
      try {
        const { data } = await axios.get<AdvertisementsResponse>('/advertisement', {
          params:{
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
    fetchTable();
  }, [orderBy, orderOption]);

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
    <Container>
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
            <td className='photoWrap'><Image className = 'PhotoListStyles' src={ postMap.photos?.slice(0,1).toString() } alt = 'Photo is not available' /></td>
            <td>{postMap.title}</td>
            <td>{postMap.created?.split('T')[0]} at {postMap.created?.split('T')[1].split('.')[0]}</td>
            <td>{postMap.location}</td>
            <td>{postMap.price}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MainTable;
