
import React, { useState, useEffect } from 'react';

function Filter() {
    const [difficultyFilter, setDifficultyFilter] = useState('All');
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API endpoint
        fetch('https://jikoni-vercel.vercel.app/recipes')
            .then(response => response.json())
            .then(data => {
                setRecipes(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error);
                setLoading(false);
            });
    }, []);

    const handleChange = (difficulty) => {
        setDifficultyFilter(difficulty);
    };

    // Filter recipes based on the difficulty level
    const filteredRecipes = difficultyFilter === 'All' ? recipes : recipes.filter(recipe => recipe.difficulty === difficultyFilter);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading recipes: {error.message}</p>;
    }

    return (
        <div>
            <h2>Filter Recipes by Difficulty</h2>
            <div>
                <button onClick={() => handleChange('All')}>All</button>
                <button onClick={() => handleChange('Easy')}>Easy</button>
                <button onClick={() => handleChange('Intermediate')}>Intermediate</button>
                <button onClick={() => handleChange('Hard')}>Hard</button>
            </div>
            <ul>
                {filteredRecipes.map(recipe => (
                    <li key={recipe.id}>
                        <h3>{recipe.name}</h3>
                        <p>Cuisine: {recipe.cuisine}</p>
                        <p>Difficulty: {recipe.difficulty}</p>
                        <p>Serving: {recipe.serving}</p>
                        <img src={recipe.image} alt={recipe.name} style={{ width: '200px', height: 'auto' }} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Filter;