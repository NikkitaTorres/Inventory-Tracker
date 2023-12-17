import itemReducer from '../../reducers/itemReducer';

describe('itemReducer', () => {
  test('should handle ADD_ITEM action', () => {
    const initialState = { items: [] };
    const newItem = { id: 1, name: 'Coffee bean 1', 
    weight: 130,
    origin: 'Origin 1',
    price: 10,
    roast: 'Light'
   };
  
   const action = { type: 'ADD_ITEM', payload: newItem };
   const newState = itemReducer(initialState, action);
  
   expect(newState.items).toHaveLength(1);
   expect(newState.items[0]).toEqual(newItem);
  });
});