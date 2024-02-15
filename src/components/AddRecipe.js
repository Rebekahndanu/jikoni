// src/AddRecipe.js
import React, { useState } from 'react';

function AddRecipe() {
  const [recipe, setRecipe] = useState({
    id: 0, // This will be handled on the server side
    name: '',
    cuisine: '',
    difficulty: '',
    'prep-time': '',
    'cook-time': '',
    'total-time': '',
    serving: '',
    image: '',
    ingredients: [],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientsChange = (e, index) => {
    const newIngredients = [...recipe.ingredients];
    newIngredients[index] = e.target.value;
    setRecipe({ ...recipe, ingredients: newIngredients });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform your POST request here using fetch or another library
    // Example fetch:
    fetch('https://jikoni-vercel.vercel.app/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(recipe),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Recipe posted successfully:', data);
        // Redirect or perform other actions after successful submission
      })
      .catch((error) => {
        console.error('Error posting recipe:', error);
      });
  };

  return (
    <div>
      <h2>Add Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Recipe Name:
          <input type="text" name="name" value={recipe.name} onChange={handleInputChange} required />
        </label>
        <label>
          Cuisine:
          <input type="text" name="cuisine" value={recipe.cuisine} onChange={handleInputChange} required />
        </label>
        <label>
          Difficulty:
          <input type="text" name="difficulty" value={recipe.difficulty} onChange={handleInputChange} required />
        </label>
        <label>
          Prep Time:
          <input type="text" name="prep-time" value={recipe['prep-time']} onChange={handleInputChange} required />
        </label>
        <label>
          Cook Time:
          <input type="text" name="cook-time" value={recipe['cook-time']} onChange={handleInputChange} required />
        </label>
        <label>
          Total Time:
          <input type="text" name="total-time" value={recipe['total-time']} onChange={handleInputChange} required />
        </label>
        <label>
          Serving:
          <input type="text" name="serving" value={recipe.serving} onChange={handleInputChange} required />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" value={recipe.image} onChange={handleInputChange} required />
        </label>
        <label>
          Ingredients:
          {recipe.ingredients.map((ingredient, index) => (
            <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientsChange(e, index)}
              required
            />
          ))}
          <button type="button" onClick={() => setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ''] })}>
            Add Ingredient
          </button>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default AddRecipe;