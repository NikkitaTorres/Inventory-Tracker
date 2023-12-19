const initialState = { 
  items: [
    { id: 1, name: 'Coffee Bean 1', weight: 130, origin: 'Origin 1', price: 10, roast: 'Light' },
  ],
  selectedItem: null,
};

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
        case 'ITEM_SOLD':
          const soldItemId = action.payload?.id;
          if (soldItemId === undefined) {
            return state;
          }
          return {
            ...state,
            items: state.items.map((item) =>
              item.id === action.payload.id
                ? { ...item, weight: item.weight - 1 }
                : item
            ),
          };
      default:
        return state;
  }
};

export default itemReducer;