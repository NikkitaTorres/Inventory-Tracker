export const addItem = (item) => {
  return {
    type: 'ADD_ITEM',
    payload: item,
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