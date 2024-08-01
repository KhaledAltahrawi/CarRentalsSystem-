import React, { useEffect, useState } from 'react';
import { getCars } from '../services/api';
import CarList from './CarList';

const Home = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      const carsData = await getCars();
      setCars(carsData);
    };
    fetchCars();
  }, []);

  return (
    <div>
      <h1>All Cars</h1>
      <CarList cars={cars} />
    </div>
  );
};

export default Home;
