import React, { Component } from 'react';
import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
import NewItemForm from './NewItemForm';
import { connect } from 'react-redux';
import { onItemClick, onSale, addItem } from '../actions/index';

class ItemControl extends Component {

  handleItemClick = (item) => {
    this.props.onItemClick(item);
  };

  handleAddItem = (newItem) => {
    this.props.addItem(newItem);
  };

  handleSale = () => {
    this.props.onSale();
  };

  render() {
    const { items, selectedItem } = this.props;

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

const mapStateToProps = (state) => ({
  items: state.items.items,
  selectedItem: state.items.selectedItem,
});

export default connect(mapStateToProps, { onItemClick, onSale, addItem })(ItemControl);
