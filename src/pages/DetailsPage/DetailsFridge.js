import React from 'react'
import "./DetailsFridge.css"

export default function DetailsFridge() {
    return (
        <div>
            <div>
            <h1>Details of Item in fridge</h1>
            <button>Add</button>
            </div>
            <div>
                <table>
                    <tr>
    <th>Item</th>
    <th>Quantities</th>
    <th>Expriy Date</th>
    <th>
        <select>
        <option>Choose</option>
        <option>Used</option>
        <option>Not Used</option>
        <option>Wasted/Thrown away</option></select></th>
  </tr>
  <tr>
    <td>Milk</td>
    <td>2</td>
    <td>11-11-2020</td>
    <td>Used</td>
    
  </tr>
   <tr>
    <td>Milk</td>
    <td>2</td>
    <td>11-11-2020</td>
    <td>Used</td>
    
  </tr>
   <tr>
    <td>Juice</td>
    <td>1</td>
    <td>01-11-2020</td>
    <td>Wasted</td>
    
  </tr>
   <tr>
    <td>Cheese</td>
    <td>4</td>
    <td>17-11-2020</td>
    <td>Not Used</td>
    
  </tr>
                </table>
            </div>
        </div>
    )
}
