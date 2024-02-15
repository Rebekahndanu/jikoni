import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./Filter.css";

function Filter({ recipes }) {
    const [difficultyFilter, setDifficultyFilter] = useState('All');

    const handleChange = (difficulty) => {
        setDifficultyFilter(difficulty);
    };

    // Filter recipes based on the difficulty level
    const filteredRecipes = difficultyFilter === 'All' ? recipes : recipes.filter(recipe => recipe.difficulty === difficultyFilter);

    return (
        <div>
            <div className='difficulty-filter'>
                <button onClick={() => handleChange('All')}>All</button>
                <button onClick={() => handleChange('Easy')}>Easy</button>
                <button onClick={() => handleChange('Intermediate')}>Intermediate</button>
                <button onClick={() => handleChange('Hard')}>Hard</button>
            </div>
            <div className='recipe-container'>
                {filteredRecipes.map((recipe) => (
                    <div key={recipe.id} className='food-container'>
                        <h3 className='food-title'>{recipe.name}</h3>
                        <img 
                            src={recipe.image} 
                            alt={recipe.name}
                            className='food-image' 
                        />
                        <p className='food-description'>Cuisine: {recipe.cuisine}</p>
                        <p className='food-description'>Difficulty: {recipe.difficulty}</p>
                        <p className='food-description'>Serving: {recipe.serving}</p>
                        <p className='get-button'>
                            <NavLink to={`/food/${recipe.id}`}>Get Recipe</NavLink>  
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Filter;
