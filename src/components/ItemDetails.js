import React from 'react';
import PropTypes from 'prop-types';

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

ItemDetails.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    roast: PropTypes.string.isRequired,
  }).isRequired,
};

export default ItemDetails;