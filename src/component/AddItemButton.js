import React, { useState } from "react";


export default function AddItemButton() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState(" ");

  const submitForm = (event) => {
    event.preventDefault();
    console.log(`
        ${item}
        ${quantity}
        ${date}
        ${location}
        `);
  };

  return (
    <div>
      <form className="form-shape">
        <h1>Add Item</h1>
        <label>Item</label>
        <input
          type="text"
          value={item}
          onChange={(event) => setItem(event.target.value)}
        ></input>

        <label>Quantity</label>
        <input
          type="text"
          value={quantity}
          onChange={(event) => setQuantity(event.target.value)}
        ></input>

        <label>Location</label>
        <select
          onChange={(event) => setLocation(event.target.value)}
          value={location}
        >
          <option value="" defaultValue>
            select a location
          </option>
          <option value="Fridge">Fridge</option>
          <option value="Pantry">Pantry</option>
        </select>

        <label>Expiration date</label>
        <input
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        ></input>

        <button className="myButton" type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
}
