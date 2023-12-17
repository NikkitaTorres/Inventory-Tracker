const initialState = { items: [] };

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('itemReducer - Previous State:', state);
      console.log('itemReducer - Action Payload:', action.payload);
      const newState = { ...state, items: [...state.items, action.payload] };
      console.log('itemReducer - New State:', newState);
      return newState;
    default:
      return state;
  }
};

export default itemReducer;