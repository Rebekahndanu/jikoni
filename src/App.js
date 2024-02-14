import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Food from './components/Food';
import ReadRecipe from './components/ReadRecipe';

function App() {

  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    fetch('https://jikoni-vercel.vercel.app/recipes')
    .then((res) => res.json())
    .then((data) => setRecipes(data))
    .catch(error => {
      console.error("Error fetching data:", error);
  })
  }, [])

  const images = recipes.map((recipe) => recipe.image)  

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home images={images}/>}/>
        <Route exact path='/food/:id' element={<ReadRecipe recipes={recipes}/>}/>
        <Route exact path='/food' element={<Food recipes={recipes}/>}/>
      </Routes>
    </BrowserRouter>
  );
}


  export default App;
