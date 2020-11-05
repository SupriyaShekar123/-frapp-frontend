import React from "react";
import "./MyWaste.css";

export default function ItemTable(props) {
  const { name, quantity, location, expirationDate } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{location}</td>
      <td>{new Date(expirationDate).toLocaleDateString("en-GB")}</td>
    </tr>
  );
}
