import React from "react";
import "./RecipeCard.css";

export default function RecipeCard(props) {
  const recipe = props.recipe;

  return (
    <div className="card">
      <div className="img-div">
        <img alt={`image of ${recipe.title}`} src={recipe.thumbnail} />
      </div>
      <p>{recipe.title}</p>
      <a target="_blank" className="myButton" href={recipe.href}>
        View Recipe
      </a>
    </div>
  );
}
