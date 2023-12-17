import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';

const ItemList = ({ items, onItemClick, onSale }) => {
  return (
    <div>
      <h2>Inventory</h2>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          initialWeight={item.weight}
          origin={item.origin}
          price={Number (item.price)}
          roast={item.roast}
          onSale={onSale} 
          onItemClick={() => onItemClick(item)}
        />
      ))}
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      weight: PropTypes.number.isRequired,
      origin: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      roast: PropTypes.string.isRequired,
    })
  ).isRequired,
  onItemClick: PropTypes.func.isRequired,
  onSale: PropTypes.func.isRequired,
};

export default ItemList;
