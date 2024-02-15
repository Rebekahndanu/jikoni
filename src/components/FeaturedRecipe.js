import React, { useState, useEffect } from 'react';

const FeaturedRecipe = () => {
  const [featuredRecipe, setFeaturedRecipe] = useState(null);
  const apiURL = 'https://jikoni-vercel.vercel.app/recipes';

  useEffect(() => {
    // Fetch featured recipe data
    fetch(apiURL)
      .then((response) => response.json())
      .then((data) => {
        // Assuming your API response is an array of recipes
        // You may need to adjust this based on your API structure
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomRecipe = data[randomIndex];
        setFeaturedRecipe(randomRecipe);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array ensures useEffect runs only once on component mount

  return (
    <div>
      <h2>Featured Recipe</h2>
      {featuredRecipe ? (
        <div>
          <h3>{featuredRecipe.title}</h3>
          <p>{featuredRecipe.description}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading featured recipe...</p>
      )}
    </div>
  );
};

export default FeaturedRecipe;
