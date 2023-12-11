import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const ItemList = ({ items, onItemClick }) => {
  return (
    <div>
      <h2>Inventory</h2>
      {items.map((item) => (
        <Item key={item.id} name={item.name} initialWeight={item.weight} onItemClick={onItemClick} />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default ItemList;