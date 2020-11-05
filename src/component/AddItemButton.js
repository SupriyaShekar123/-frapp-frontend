import React, { useState } from "react";
import {useHistory} from "react-router-dom"
import { useDispatch } from "react-redux";
import { postItem } from "../store/items/actions";

export default function AddItemButton() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState(" ");
  const dispatch = useDispatch();

  const history = useHistory();

  const submitForm = (event) => {
    event.preventDefault();
    const newDate = date.split("-").map((partial) => parseInt(partial));

    const item = {
      name,
      quantity,
      expirationDate: new Date(newDate[0], newDate[1] - 1, newDate[2]),
      location,
    };

    dispatch(postItem(item));
    history.push("/WhatDoIHave")
  };

  return (
    <div>
      <form className="form-shape">
        <h1>Add Item</h1>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <label>Quantity</label>
        <input
          type="text"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        />

        <label>Location</label>
        <select
          onChange={(event) => setLocation(event.target.value)}
          value={location}
        >
          <option value="" defaultValue>
            select a location
          </option>
          <option value="fridge">Fridge</option>
          <option value="pantry">Pantry</option>
        </select>

        <label>Expiration date</label>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        />

        <button className="myButton" type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}
