import React from 'react';
import {Link} from 'react-router-dom';
import "../../component/navbar.css";

export default function RecipeCard(props) {
  const recipe = props.recipe;
  
  return (
    <div className="card">
      <div className="container">
      <img alt={`image of ${recipe.title}`} src={recipe.thumbnail}/>
      <h3>Title: <b>{recipe.title}</b></h3>
      <a target="_blank" href={recipe.href}>View Recipe</a>
      </div>
    </div>
  )
}
