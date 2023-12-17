import itemReducer from '../../reducers/item-reducer';

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

  it('should handle ITEM_CLICKED action', () => {
    const initialState = {
      items: [
        { id: 1, name: 'Coffee Bean 1', weight: 130, clicked: false },
      ],
    };

    const action = {
      type: 'ITEM_CLICKED',
      payload: { id: 1 },
    };

    const newState = itemReducer(initialState, action);

    expect(newState.items[0].clicked).toBe(true);
  });

  test('should handle ITEM_SOLD action', () => {
    const initialState = {
      items: [
        {id: 1, name: 'Coffee Bean 1', weight: 130},
      ],
    };

    const action = {
      type: 'ITEM_SOLD',  
      payload: { id: 1 },
    };

    const newState = itemReducer(initialState, action);

    expect(newState.items[0].weight).toBe(129);
  });
});