// Item.js
import React, { useState } from "react";
import PropTypes from "prop-types";

const Item = ({ name, initialWeight, origin, price, roast, onSale }) => {
  const [weight, setWeight] = useState(initialWeight);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleSale = () => {
    if (weight > 0) {
      setWeight(weight - 1);
      onSale(); // Notify the parent component about the sale
    }
  };

  return (
    <div>
      <p>{`${name} - ${weight} lbs`}</p>
      <button onClick={toggleDetails}>View Details</button>
      <button onClick={handleSale}>Sale</button>

      {showDetails && (
        <div>
          <p>Origin: {origin}</p>
          <p>Price: ${price}</p>
          <p>Roast: {roast}</p>
        </div>
      )}
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  initialWeight: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired,
  onSale: PropTypes.func.isRequired,
};

export default Item;
