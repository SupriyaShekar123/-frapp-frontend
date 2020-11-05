import React from "react";
import { useSelector } from "react-redux";
import { selectWastedItems } from "../../store/items/selectors";
import ItemTable from "./ItemTable";
import "./MyWaste.css";

export default function MyWaste() {
  const data = useSelector(selectWastedItems);

  const itemToRender = () =>
    data.map((food) => <ItemTable key={food.id} {...food} />);

  return (
    <div>
      <h1>My Waste</h1>
      <div>
        <table className="board">
          <thead>
            <tr className="Headline">
              <th> Item </th>
              <th> quantity </th>
              <th> Fridge or Pantry ?</th>
            </tr>
          </thead>
          <tbody>{itemToRender()}</tbody>
        </table>
      </div>
    </div>
  );
}
