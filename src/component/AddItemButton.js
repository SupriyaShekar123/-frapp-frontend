import React, { useState} from 'react'
import './AddItemButton.css'



export default function AddItemButton() {

    const [item, setItem] = useState("");
    const [quantity, setQuantity] = useState("");
    const [date, setDate] = useState("")

    const submitForm = (event) =>{
        event.preventDefault()
        console.log(`
        ${item}
        ${quantity}
        ${date}
        `);
    }

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

                <label>Expiration date</label>
                <input 
                type="date"
                value={date}
                onChange={(event => setDate(event.target.value))}
                ></input>

                <button 
                className="myButton" 
                type="subm"
                onClick={submitForm}
                >Submit</button>
            </form>
        </div>
    )
}
