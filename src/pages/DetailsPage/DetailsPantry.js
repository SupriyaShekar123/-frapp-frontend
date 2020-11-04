import React from 'react'
import "../../pages/MyWaste/MyWaste.css"

import ListDetails from '../../component/ListDetails'

export default function DetailsPantry() {

   let dummyData =[
        {
            id:1,
            item:"carrot",
            quantity:"5",
            choose: "Used",
            expiryDate:'2020-03-03',
            remove:"X"
        },
        {
            id:2,
            item:"oats",
            quantity:"3",
            choose: "Used",
            expiryDate: '2020-04-03',
            remove:"X"
        },
        {
            id:3,
            item:"spaghetti",
            quantity:"5",
            choose: "Expired",
            expiryDate: '2020-05-03',
            remove:"X"
        },
        {
            id:4,
            item:"pizza",
            quantity:"1",
            choose: "Not Used",
            expiryDate: '2020-06-03',
            remove:"X"
        },
        {
            id:5,
            item:"rice",
            quantity:"2",
            choose: "Used",
            expiryDate: '2020-01-03',
            remove:"X"
        },
    ]
    
    const itemToRender = () => dummyData.map((food) =>
        
        <ListDetails   key={food.id} {...food}/>
    )
    
    return (
        <div>
            <h1>Details of Items in Pantry</h1>
            <div >
                <table className="board">
                    <tr className="Headline">
                        <th> Item </th>
                        <th> Quantity </th>
                        <th>Expiry date</th>
                        <th> <select>
                          <option>Choose</option>
                          <option>Used</option>
                          <option>Not used</option>
                          <option>Expired</option>
                          </select></th>
                          <th>Remove</th>
                    </tr>                 
                    {itemToRender()}       
                </table>
            </div>
        </div>
    )
}



