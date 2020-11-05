import React, { useState, useEffect } from "react";
import Axios from "axios";
import RecipeCard from "./RecipeCard";
import { useSelector } from "react-redux";
import { selectItems } from "../../store/items/selectors";

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const items = useSelector(selectItems);

  const unusedItems = items.filter((item) => {
    if (item.used === false && item.wasted === false) {
      return item;
    }
  });
  const itemsByDate = unusedItems.sort(
    (itemA, itemB) =>
      new Date(itemA.expirationDate) - new Date(itemB.expirationDate)
  );

  const ingredient = itemsByDate[0] ? itemsByDate[0].name : null;

  console.log({ ingredient });

  const recipesURL = `https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/?i=${ingredient},`;

  const getRecipes = async () => {
    try {
      const response = await Axios.get(recipesURL);
      setRecipes(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  recipes ? console.log("recipes:", recipes) : console.log("finding recipes");

  useEffect(() => {
    getRecipes();
  }, [ingredient]);

  return (
    <div>
      <h2>
        {ingredient} expiring soon. Here are 10 suggested recipes using{" "}
        {ingredient}:
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {recipes.results
          ? recipes.results.map((recipe) => {
              return (
                <div key={recipe.href}>
                  <RecipeCard recipe={recipe} />
                </div>
              );
            })
          : "Loading..."}
      </div>
      {/* <hr /> */}
    </div>
  );
}
