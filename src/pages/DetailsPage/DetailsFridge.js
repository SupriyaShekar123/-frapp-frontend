import React from 'react'
import "../../pages/MyWaste/MyWaste.css"

import ListDetails from '../../component/ListDetails'

export default function DetailsFridge() {

   let dummyData =[
        {
            id:1,
            item:"milk",
            quantity:"2",
            choose: "Used",
            expiryDate:'2020-07-03',
            remove:"X"
        },
        {
            id:2,
            item:"yoghurt",
            quantity:"2",
            choose: "Used",
            expiryDate: '2020-07-03',
            remove:"X"
        },
        {
            id:3,
            item:"butter",
            quantity:"6",
            choose: "Expired",
            expiryDate: '2020-05-03',
            remove:"X"
        },
        {
            id:4,
            item:"orange juice",
            quantity:"1",
            choose: "Not Used",
            expiryDate: '2020-11-03',
            remove:"X"
        },
        {
            id:5,
            item:"cheese",
            quantity:"2",
            choose: "Used",
            expiryDate: '2020-02-03',
            remove:"X"
        },
    ]
    
    const itemToRender = () => dummyData.map((food) =>
        
        <ListDetails   key={food.id} {...food}/>
    )
    
    return (
        <div>
            <h1>Details of Items in Fridge</h1>
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


