export const addItem = (newItem) => {
  return {
    type: 'ADD_ITEM',
    payload: newItem
  };
};

export const onItemClick = (item) => ({
  type: 'ITEM_CLICKED',
  payload: item,
});

export const onSale = (item) => ({
  type: 'ITEM_SOLD',
  payload: item,
});