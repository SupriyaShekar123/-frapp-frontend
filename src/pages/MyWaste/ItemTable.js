import React from "react";
import "./MyWaste.css";

export default function ItemTable(props) {
  const { name, quantity, location } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{location}</td>
    </tr>
  );
}
