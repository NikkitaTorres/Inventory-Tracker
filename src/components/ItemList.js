import React from 'react';
import Item from './Item';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { onItemClick, onSale } from '../actions/index';

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleItemClick = (item) => {
    dispatch(onItemClick(item));
  };

  const handleSale = (item) => {
    dispatch(onSale(item));
  };

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
          onSale={handleSale} 
          onItemClick={() => handleItemClick(item)}
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

const mapStateToProps = (state) => ({
  items: state.items.items,
});

export default connect(mapStateToProps)(ItemList);