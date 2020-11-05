import React from "react";
import "../../pages/MyWaste/MyWaste.css";

import ListDetails from "../../component/ListDetails";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectFridgeItems } from "../../store/items/selectors";

export default function DetailsFridge() {
  const data = useSelector(selectFridgeItems);

  const itemToRender = () =>
    data.map((food) => <ListDetails key={food.id} {...food} />);

  return (
    <div>
      <h1>Details of Items in Fridge</h1>
      <Link to="/WhatDoIHave" className="myButton">
        Back
      </Link>{" "}
      <Link to="/RecipeSuggestions" className="myButton">
        Recipes
      </Link>
      <div>
        <table className="board">
          <thead>
            <tr className="Headline">
              <th> Item </th>
              <th> Quantity </th>
              <th>Expiry date</th>
              <th>Expired/Eaten</th>
            </tr>
          </thead>
          <tbody>{itemToRender()}</tbody>
        </table>
      </div>
    </div>
  );
}
