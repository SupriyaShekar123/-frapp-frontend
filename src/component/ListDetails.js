import React from 'react'

export default function ListDetails(props) {

    const{item,quantity,expiryDate,choose,remove}=props

    return (
        <tr>
            <td>{item}</td>
            <td>{quantity}</td>
            <td>{expiryDate}</td>
            <td>{choose}</td>
            <td>{remove}</td>
        </tr>    
    )
    
}
