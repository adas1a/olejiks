import React, { FC, useEffect, useState } from 'react';
import Axios from 'axios';
import { Vinyl } from 'react-bootstrap-icons';
import { Advertisement } from '../../interfaces/Advertisement';
import {Button} from "react-bootstrap";

const Home: FC = () => {
  const [advertisements, setAdvertisements] = useState<Advertisement[]>();
  //note
  const fetchAd = async():Promise<number> =>{
    const { status } = await Axios.get<Advertisement[]>('/api/advertisement');
    return status;
  }

  const handleClick = async(): Promise<void> => {
    const status = await fetchAd()
    alert(status)
  }

  useEffect( () => {
    const fetchData = async (): Promise<void> => {
      try {
        const { data } = await Axios.get<Advertisement[]>('/api/advertisement');
        setAdvertisements(data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>OLEJIX &reg;</h1>
      Advertisements count: {advertisements?.length}
      {advertisements?.map((item)=> (
        <div key={item.id}>{item.title}</div>
      ))}
      <Button onClick={handleClick}>Test</Button>
    </div>
  );
};

export default Home;
