const initialState = { items: [] };

const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    case 'ITEM_CLICKED':
      return {
        ...state,
        items: state.items.map((item) =>
        item.id === action.payload.id ? { ...item, clicked: true } : item
        ),
      };
      default:
        return state;
  }
};

export default itemReducer;