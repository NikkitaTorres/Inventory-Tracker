import React from 'react';

const ItemDetails = ({ item }) => {
  const { name, origin, price, roast } = item;

  return (
    <div>
      <h2>{name}</h2>
      <p>Origin: {origin}</p>
      <p>Price: ${price}</p>
      <p>Roast: {roast}</p>
    </div>
  );
};

export default ItemDetails;