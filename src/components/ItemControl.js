import React, { Component } from 'react';
import ItemList from './ItemList.js';
import ItemDetails from './ItemDetails.js';
import NewItemForm from './NewItemForm.js';

class ItemControl extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        { id: 1, name: 'Coffee Bean 1', weight: 130, origin: 'Origin 1', price: 10, roast: 'Light' },
      ],
      selectedItem: null,
    };
  }

  handleItemClick = (item) => {
    this.setState({ selectedItem: item });
  };

  handleAddItem = (newItem) => {
    this.setState((prevState) => ({ items: [...prevState.items, newItem] }));
  };

  render() {
    const { items, selectedItem } = this.state;

    return (
      <div>
        <h1>Coffee Bean Inventory</h1>
        <ItemList items={items} onItemClick={this.handleItemClick} />
        {selectedItem ? <ItemDetails item={selectedItem} /> : null}
        <NewItemForm onAddItem={this.handleAddItem} />
      </div>
    );
  }
}

export default ItemControl;
