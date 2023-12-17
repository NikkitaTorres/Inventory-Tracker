export const addItem = (item) => {
  console.log('addItem Action Creator - Payload:', item);
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