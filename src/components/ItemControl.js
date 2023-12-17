import React, { Component } from 'react';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import NewItemForm from './NewItemForm';
import { connect } from 'react-redux';
import { addItem } from '../actions/index';

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
    console.log('ItemControl - Adding Item:', newItem);
    this.props.addItem(newItem);
  };

  handleSale = () => {
    console.log('Item sold!');
  };

  render() {
    const { items, selectedItem } = this.state;

    return (
      <div>
        <h1>Coffee Bean Inventory</h1>
        <ItemList items={items} onItemClick={this.handleItemClick} onSale={this.handleSale} />
        {selectedItem ? <ItemDetails item={selectedItem} /> : null}
        <NewItemForm onAddItem={this.handleAddItem} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  addItem,
};

export default connect(null, mapDispatchToProps)(ItemControl);
