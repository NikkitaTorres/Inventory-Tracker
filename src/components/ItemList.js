// ItemList.js
import React from 'react';
import Item from './Item';

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
          onSale={onSale}  // Ensure that onSale is passed down
          onItemClick={() => onItemClick(item)}
        />
      ))}
    </div>
  );
};

export default ItemList;
