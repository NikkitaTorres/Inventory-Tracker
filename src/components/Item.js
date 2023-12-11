import React, { useState } from "react";
import PropTypes from "prop-types";

const Item = ({ name, initialWeight, origin, price, roast }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <p>{`${name} - ${initialWeight} lbs`}</p>
      <button onClick={toggleDetails}>View Details</button>

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
};

export default Item;