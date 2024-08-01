import React from 'react';

const CarList = ({ cars }) => {
  return (
    <ul>
      {cars.map(car => (
        <li key={car._id}>{car.name}</li>
      ))}
    </ul>
  );
};

export default CarList;
