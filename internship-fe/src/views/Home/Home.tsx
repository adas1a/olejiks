import React, { FC, useEffect, useState } from 'react';
import Axios from 'axios';
import { Advertisement } from '../../interfaces/Advertisement';

const Home: FC = () => {
  const [advertisements, setAdvertisements] = useState<Advertisement[]>();

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const { data } = await Axios.get<Advertisement[]>('/v1/advertisements');
        setAdvertisements(data);
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e);
      }
    };
    fetchData().catch();
  }, []);

  return (
    <div>
      <h1>OLEJIX &reg;</h1>
      Advertisements count: {advertisements?.length}
    </div>
  );
};

export default Home;
