import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Food from './components/Food';


function App() {

  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3000/recipes')
    .then((res) => res.json())
    .then((data) => setRecipes(data))
  }, [])

  const images = recipes.map((recipe) => recipe.image)  

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home images={images}/>}/>
        <Route exact path='/food' element={<Food/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
