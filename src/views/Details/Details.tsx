import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import toArray from 'yup/es/util/toArray';

interface DetailsInterface {
  id: string
  title: string
  category: string
  photos: string[]
  description:string
  location: string
  price: number
  email:string
  phone:string
  created: string
}

const Details:React.FC = () => {
  const { advertId }:{advertId:string} = useParams();

  const [details, setDetails] = useState<DetailsInterface>();
  useEffect(()=>{
  const fetchDetails = async (): Promise<void> => {
    try {
      const { data } = await Axios.get<DetailsInterface>(`/api/advertisement/${advertId}`);
      setDetails(data);
    }
    catch (e) {
      console.error(e);
    }
  };
  fetchDetails();
}, [advertId]);
  console.log(details);
  return(
    <div>
      <p>{details?.title}</p>
      <p>{details?.price}</p>
      <p>{details?.category}</p>
      <p>{details?.email}</p>
      <p>{details?.location}</p>
      <p>{details?.phone}</p>
    </div>
  );
};

export default Details;
