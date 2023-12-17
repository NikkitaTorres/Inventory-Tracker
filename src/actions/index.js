export const addItem = (item) => {
  console.log('addItem Action Creator - Payload:', item);
  return {
    type: 'ADD_ITEM',
    payload: item,
  };
};