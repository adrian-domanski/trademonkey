import React, { useEffect } from 'react';
import Hero from '../../Components/Hero/Hero';
import axios from 'axios';

type Props = {};

const HomePage = (props: Props) => {
  // Make random request to wake-up the database (free tier)
  useEffect(() => {
    alert(
      'Database is hosted on a free tier, so it may take a few seconds to wake up from sleep. Make your coffee ;)',
    );

    axios.get(process.env.REACT_APP_API_URL + '/api/portfolio').catch(() => {
      console.log('Waking up the database...');
    });
  }, []);

  return (
    <>
      <Hero />
    </>
  );
};

export default HomePage;
