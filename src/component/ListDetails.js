import React from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../store/items/actions";

export default function ListDetails(props) {
  const dispatch = useDispatch();
  const { name, quantity, expirationDate, id } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{new Date(expirationDate).toLocaleDateString("en-GB")}</td>
      <td>
        <button
          className="myButton"
          onClick={() => {
            console.log(id);
            dispatch(updateItem(id, true));
          }}
        >
          Expired
        </button>{" "}
        <button
          className="myButton"
          onClick={() => dispatch(updateItem(id, false))}
        >
          Eaten
        </button>
      </td>
    </tr>
  );
}
