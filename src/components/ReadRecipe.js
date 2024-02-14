import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ReadRecipe () {

    const [recipe, setRecipe] = useState(null);
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://jikoni-vercel.vercel.app/recipes/${id}`)
        .then((res) => res.json())
        .then((data) => setRecipe(data))
        .catch(error => {
          console.error("Error fetching data:", error);
        })
    }, [id])

    if(!recipe) return <h2>Loading...</h2>

    return (
        <>
            <div>
                <h2>{recipe.name}</h2>
                <p>Cuisine: {recipe.cuisine}</p>
                <p>Difficulty: {recipe.difficulty}</p>
                <p>It takes {recipe['prep-time']} to prepare</p>
                <p>It takes {recipe['cook-time']} to cook</p>
                <p>It takes {recipe['total-time']} to cook and prepare</p>
                <p>The meal serves {recipe.serving} people</p>
                <img src={recipe.image} alt="food"/>
                <p>Description: {recipe.description}</p>
                <ul>Ingredients:
                {recipe.ingredients.map((ingredient, index)=>(
                    <li key={index}>
                        {ingredient}
                    </li>
                ))}
                </ul>
                <ol> Instructions:
                    {recipe.instructions.map((intstruction, index)=>(
                        <li key={index}>
                            {intstruction}
                        </li>
                    ))}
                </ol>
            </div>
        </>
    )
}

export default ReadRecipe;