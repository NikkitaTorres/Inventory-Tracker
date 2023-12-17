import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewItemForm = ({ onAddItem }) => {
  const [newItem, setNewItem] = useState({ name: '', origin: '', price: 0, roast: '' });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddItem({ ...newItem, weight: 130, price: Number(newItem.price), id: Date.now() });
    setNewItem({ name: '', origin: '', price: 0, roast: '' });
  };

  return (
    <div>
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={newItem.name} onChange={handleChange} required />
        <label>Origin:</label>
        <input type="text" name="origin" value={newItem.origin} onChange={handleChange} required />
        <label>Price:</label>
        <input type="number" name="price" value={newItem.price} onChange={handleChange} required />
        <label>Roast:</label>
        <input type="text" name="roast" value={newItem.roast} onChange={handleChange} required />
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
};

NewItemForm.propTypes = {
  onAddItem: PropTypes.func.isRequired,
};

export default NewItemForm;