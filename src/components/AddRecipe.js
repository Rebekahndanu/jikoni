import React from "react";

function AddRecipe () {
    return (
        <form action="#">
            <label>Cuisin</label>
        <select name="Cuisin" id="lang">
             <option value="North African">North African</option>
             <option value="East African">East African</option>
             <option value="South African">South African</option>
             <option value="West African">West African</option>
        </select>
            <label>Difficulty</label>
        <select name="Difficulty" id="lang">
            <option value="Easy">Easy</option>
            <option value="Hard">Hard</option>
            <option value="Intermediate">Intermediate</option>
        </select>
            <label>Prep-time</label>
           <select name="Preptim" id="lang">
              <option value="5 min">5 min</option>
              <option value="15 min">15 min</option>
              <option value="20 min">20 min</option>
              <option value="30 min">30 min</option>
              <option value="1 hour">1 hour</option>
            </select>   
           <label>Serving</label>
          <select name="Serving" id="lang">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="more">more</option>
            
            </select>  
          </form>
    )

}
   

export default AddRecipe;