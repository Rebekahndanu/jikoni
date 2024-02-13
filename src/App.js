import React, { useEffect, useState } from 'react';
import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';


function App() {
=======
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <Search />
>>>>>>> fffea9a (Modified Search.js)

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
