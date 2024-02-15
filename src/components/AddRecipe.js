import React from "react";
import { useState, useEffect } from "react";
import {v4 as uuidv4} from 'uuid'

function AddRecipe() {
    const [formName, setFormName] = useState('')
    const [formCuisine, setFormCuisine] = useState('')
    const [formDifficulty, setFormDifficulty] = useState('')
    const [formPrepTime, setFormPrepTime] = useState('')
    const [formCookTime, setFormCookTime] = useState('')
    const [formTotalTime, setFormTotalTime] = useState('')
    const [formServing, setFormServing] = useState('')
    const [formImage, setFormImage] = useState('')
    const [formIngredients, setFormIngredients] = useState('')
    const [formInstructions, setFormInstructions] = useState('')

    const newRecipe = {
        "id": id,
        "name": formName,
        "cuisine": formCuisine,
        "difficulty": formDifficulty,
        "prep-time": formPrepTime,
        "cook-time": formCookTime,
        "total-time": formTotalTime,
        "serving": formServing,
        "image": formImage,
        "ingredients": formIngredients,
        "instructions": formInstructions
    };

    useEffect(() => {
        fetch('https://jikoni-vercel.vercel.app/recipes', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newRecipe)
        })
        .then((res) => res.json())
        .then((data) => console.log(data))
    }, [])

    return(
        <form>
            <label>Name:</label>     
            <input onChange={(e) => setFormName(e.target.value)} type="text" value={formName}/><br/>
            <label>Cuisine:</label>     
            <select onChange={(e) => setFormCuisine(e.target.value)}>
                <option value="West Africa">West Africa</option>
                <option value="East Africa">East Africa</option>
                <option value="North Africa">North Africa</option>
                <option value="East Africa">East Africa</option>
            </select><br/>
            <label>Difficulty:</label>     
            <select onChange={(e) => setFormDifficulty(e.target.value)}>
                <option value='All'>All</option>
                <option value='Easy'>Easy</option>
                <option value='Intermediate'>Intermediate</option>
                <option value='Hard'>Hard</option>
            </select><br/>
            <label>Prep time:</label>     
            <input onChange={(e) => setFormPrepTime(e.target.value)} type="text"/><br/>
            <label>Cook time:</label>     
            <input onChange={(e) => setFormCookTime(e.target.value)} type="text"/><br/>
            <label>Total time:</label>     
            <input onChange={(e) => setFormTotalTime(e.target.value)} type="text"/><br/>
            <label>Serving:</label>     
            <input onChange={(e) => setFormServing(e.target.value)} type="text"/><br/>
            <label>Image link:</label>     
            <input onChange={(e) => setFormImage(e.target.value)} type="text"/><br/>
            <label>Ingredients:</label>     
            <input onChange={(e) => setFormIngredients(e.target.value)} type="text"/><br/>
            <label>Instructions:</label>     
            <input onChange={(e) => setFormInstructions(e.target.value)} type="text"/><br/>
        </form>
    )
}

export default AddRecipe;