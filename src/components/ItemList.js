import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Inventory</h2>
      {items.map((item) => (
        <Item
          key={item.id}
          name={item.name}
          initialWeight={item.weight}
          origin={item.origin}
          price={item.price}
          roast={item.roast}
        />
      ))}
    </div>
  );
};

export default ItemList;