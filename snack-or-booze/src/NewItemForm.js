import React, { useState } from "react";
import SnackOrBoozeApi from "./Api";

function NewItemForm({ addItem }) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    recipe: '',
    serve: '',
    type: 'snack'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await SnackOrBoozeApi.addItem(formData);
    addItem();
    setFormData({ name: '', description: '', recipe: '', serve: '', type: 'snack' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="recipe">Recipe:</label>
        <input
          type="text"
          id="recipe"
          name="recipe"
          value={formData.recipe}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="serve">Serve:</label>
        <input
          type="text"
          id="serve"
          name="serve"
          value={formData.serve}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="type">Type:</label>
        <select
          id="type"
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="snack">Snack</option>
          <option value="drink">Drink</option>
        </select>
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
}

export default NewItemForm;