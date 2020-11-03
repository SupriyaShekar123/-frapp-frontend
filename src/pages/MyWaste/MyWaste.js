import React from 'react'
import ItemTable from "./ItemTable"
import "./MyWaste.css"

export default function MyWaste() {

    let dummyData =[
        {
            id:1,
            item:"carrot",
            quantity:"5",
            location: "Fridge",
            expiration: new Date('2020-03-03')
        },
        {
            id:2,
            item:"yoghurt",
            quantity:"3",
            location: "Fridge",
            expiration: new Date('2020-04-03')
        },
        {
            id:3,
            item:"spaghetti",
            quantity:"5",
            location: "Pantry",
            expiration: new Date('2020-05-03')
        },
        {
            id:4,
            item:"pizza",
            quantity:"1",
            location: "Fridge",
            expiration: new Date('2020-06-03')
        },
        {
            id:5,
            item:"rice",
            quantity:"2",
            location: "Pantry",
            expiration: new Date('2020-01-03')
        },
    ]
    
    const itemToRender = () => dummyData.map((food) =>
        // <tr key={food.id}>
        //     <td>{food.item}</td>
        //     <td>{food.quantity}</td>
        //     <td>{food.location}</td>
        // </tr>
        <ItemTable key={food.id} {...food}/>
    )


    return (
        <div>
            <h1>My Waste</h1>
            <div >
                <table className="board">
                    <tr className="Headline">
                        <th> Item </th>
                        <th> quantity </th>
                        <th> Fridge or Pastry ?</th>
                    </tr>                 
                    {itemToRender()}       
                </table>
            </div>
        </div>
    )
}
