import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactCardFlip from "react-card-flip";
import {
  selectFridgeItems,
  selectPantryItems,
} from "../../store/items/selectors";
import "./WhatDoIHave.css";

export default function WhatDoIHave() {
  const [isFlipped, setFlipped] = useState(false);
  const [isCardFlipped, setCardFlipped] = useState(false);
  const fridge = useSelector(selectFridgeItems);
  const pantry = useSelector(selectPantryItems);

  function open(e) {
    e.preventDefault();
    setFlipped(!isFlipped);
  }
  function close(e) {
    e.preventDefault();
    setCardFlipped(!isCardFlipped);
  }

  return (
    <div>
      <h1 className="center">What do I have?</h1>
      <div className="container">
        <div>
          <ReactCardFlip
            isFlipped={isFlipped}
            flipDirection="horizontal"
            cardZIndex={-1}
          >
            <div key="front">
              <h2>What's in the fridge ?</h2>
              <img
                src="https://www.naturefresh.ca/wp-content/uploads/How-To-Organize-Your-Fridge-InsideFridge-terraskitchen-873x950.jpg"
                alt="pantry"
                width="350px"
                height="400px"
              />
              <div className="center">
                <button className="seemore_button" onClick={open}>
                  Check out
                </button>
              </div>
            </div>

            <div key="back">
              <h2>List of items in fridge</h2>
              <ol>
                {fridge.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ol>
              <Link to="/Itemsinfridge">
                <button className="seemore_button">See more</button>
              </Link>
              <div className="spacing">
                <button className="seemore_button" onClick={open}>
                  Check out
                </button>
              </div>
            </div>
          </ReactCardFlip>
        </div>
        <div>
          <ReactCardFlip
            isFlipped={isCardFlipped}
            flipDirection="horizontal"
            cardZIndex={6}
          >
            <div>
              <h2>What's in the pantry ?</h2>
              <img
                src="https://i.pinimg.com/564x/4c/38/cd/4c38cd0ad215dfb5ea5365630893c99d.jpg"
                alt="pantry"
              />
              <div className="center_all">
                <button className="seemore_button" onClick={close}>
                  Check out
                </button>
              </div>
            </div>

            <div>
              <h2>List of items in pantry</h2>
              <ol>
                {pantry.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ol>
              <Link to="Itemsinspantry">
                <button className="seemore_button">See more</button>
              </Link>
              <div className="spacing">
                <button className="seemore_button" onClick={close}>
                  Check out
                </button>
              </div>
            </div>
          </ReactCardFlip>
        </div>
      </div>
      <Link to="/AddItemButton" className="myButton">
        Add Items
      </Link>
    </div>
  );
}
