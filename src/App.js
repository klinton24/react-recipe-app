import React, { useEffect, useState } from "react";
import Recipe from "./recipe/Recipe";
import "./styles.css";

export default function App() {
  const appID = "377dc690";
  const appKey = "b4dd79bfc4ff5623ed31251bd948a8c5";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${appKey}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  return (
    <div className="App">
      <header className="header">
        <h1>Recipe Finder</h1>
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="Submit">
            Search
          </button>
        </form>
      </header>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            ingredients={recipe.recipe.ingredients}
            image={recipe.recipe.image}
          />
        ))}
      </div>
    </div>
  );
}
