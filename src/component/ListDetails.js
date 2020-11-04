import React from "react";

export default function ListDetails(props) {
  const { name, quantity, expirationDate, used } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{new Date(expirationDate).toLocaleDateString("en-GB")}</td>
      <td>{used}</td>
      <td>remove</td>
    </tr>
  );
}
