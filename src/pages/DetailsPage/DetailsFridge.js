import React from "react";
import "../../pages/MyWaste/MyWaste.css";

import ListDetails from "../../component/ListDetails";
import { useSelector } from "react-redux";
import { selectFridgeItems } from "../../store/items/selectors";

export default function DetailsFridge() {
  const data = useSelector(selectFridgeItems);

  const itemToRender = () =>
    data.map((food) => <ListDetails key={food.id} {...food} />);

  return (
    <div>
      <h1>Details of Items in Fridge</h1>
      <div>
        <table className="board">
          <tr className="Headline">
            <th> Item </th>
            <th> Quantity </th>
            <th>Expiry date</th>
            <th>
              {" "}
              <select>
                <option>Choose</option>
                <option>Used</option>
                <option>Not used</option>
                <option>Expired</option>
              </select>
            </th>
            <th>Remove</th>
          </tr>
          {itemToRender()}
        </table>
      </div>
    </div>
  );
}
