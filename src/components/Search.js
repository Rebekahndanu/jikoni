import { useState } from "react";

function Search(){

    const[food,setFood] = useState("")
    const[searchResult, setSearchResult] = useState(null)

    function handleSearch(event){
        setFood(event.target.value)
    }

    function handleSubmit(event){
        event.preventDefault();

        fetch("./db.json")
        .then(response=>response.json())
        .then((data)=>{

            const result = data.recipes.find(item => item.name.toLowerCase() === food.toLowerCase())
            if(result){
                setSearchResult(result);
            }else{
                setSearchResult(null)
                console.log('Food Not Found')
                 
            }
            
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
    }

    return (  
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleSearch} placeholder="Food..."/>
                <button type="submit" >Search</button>
            </form>

            {searchResult && (
                <div>
                    <h2>{searchResult.name}</h2>
                    <p>Cuisine: {searchResult.cuisine}</p>
                    <p>Difficulty: {searchResult.difficulty}</p>
                    <p>It takes {searchResult['prep-time']} to prepare</p>
                    <p>It takes {searchResult['cook-time']} to cook</p>
                    <p>It takes {searchResult['total-time']} to cook and prepare</p>
                    <p>The meal serves {searchResult.serving} people</p>
                    <img src={searchResult.image} alt="image"/>
                    <p>Description: {searchResult.description}</p>
                    <ul>Ingredients:
                    {searchResult.ingredients.map((ingredient, index)=>(
                        <li key={index}>
                            {ingredient}
                        </li>
                    ))}

                    </ul>
                    <ol> Instructions:
                    {searchResult.instructions.map((intstruction, index)=>(
                        <li key={index}>
                            {intstruction}
                        </li>
                    ))}
                    </ol>
                    


                </div>
            )}

        </div>
    );
}
 
export default Search;