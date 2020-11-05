import React from "react";
import { useSelector } from "react-redux";
import { selectItems } from "../../store/items/selectors";
import ItemTable from "./ItemTable";
import "./MyWaste.css";

export default function MyWaste() {

  const data = useSelector(selectItems);

  // Filter the item

  const today=new Date().toISOString() 
  
  const itemWaste = data.filter(item =>{
    if(item.expirationDate < today )
    return item
  })
  
  // if( data.expirationDate )

  const itemToRender = () =>
  itemWaste.map((food) => <ItemTable key={food.id} {...food} />);


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
