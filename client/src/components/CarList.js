<<<<<<< HEAD
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
=======
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
>>>>>>> c342c0499b682941d4d2bb302fd5f6920adce68e
