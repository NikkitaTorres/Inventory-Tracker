import React, { useState } from "react";
import PropTypes from 'prop-types';

const Item = ({ name, initialWeight, onItemClick }) => {
  const [weight, setWeight] = useState(initialWeight);

  const handleItemClick = () => {
    if (weight > 0) {
      setWeight(weight - 1);
      onItemClick();
    }
  };

  return (
    <div>
      <p>{`${name} - ${weight} lbs`}</p>
      <button onClick={handleItemClick}>View Details</button>
    </div>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  initialWeight: PropTypes.number.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default Item;