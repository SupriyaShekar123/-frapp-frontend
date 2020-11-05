import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../../store/items/selectors";
import {useHistory} from "react-router-dom"
import ItemTable from "./ItemTable";
import "./MyWaste.css";

export default function MyWaste() {

  const data = useSelector(selectItems);
  const history= useHistory()

  // Filter the item

  const today=new Date().toISOString() 
  
  const itemWaste = data.filter(item =>{
    if(item.expirationDate < today )
    return item
  })
  
  // if( data.expirationDate )

  const itemToRender = () =>
  itemWaste.map((food) => <ItemTable key={food.id} {...food} />);


    function back(e){
     e.preventDefault()
     history.push("/WhatDoIHave")

    }

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
      <button className="myButton" onClick={back}>Back</button>
    </div>
  );
}
