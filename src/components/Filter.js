
import React, { useState } from 'react';

function Filter({ recipes }) {
    const [difficultyFilter, setDifficultyFilter] = useState('All');

    const handleChange = (difficulty) => {
        setDifficultyFilter(difficulty);
    };

    // Filter recipes based on the difficulty level
    const filteredRecipes = difficultyFilter === 'All' ? recipes : recipes.filter(recipe => recipe.difficulty === difficultyFilter);

    return (
        <div>
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