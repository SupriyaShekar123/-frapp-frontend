import React from 'react'
import "./MyWaste.css"

export default function ItemTable(props) {

    const{item,quantity,location}=props

    return (
        <tr>
            <td>{item}</td>
            <td>{quantity}</td>
            <td>{location}</td>
        </tr>    
    )
}
