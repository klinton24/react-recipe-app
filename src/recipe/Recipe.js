import React from "react";
import "./styles.css";

const Recipe = ({ title, calories, ingredients, image }) => {
  return (
    <div className="recipe">
      <h1 className="recipeName">{title}</h1>

      <p>{Math.round(calories)} Calories</p>
      <div className="imageDiv">
        <img className="image" src={image} alt="" />
      </div>
      <ul className="ingredients">
        {"Ingredients:"}
        {ingredients.map(ingredient => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Recipe;
