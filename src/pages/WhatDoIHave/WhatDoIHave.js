import React,{useState} from 'react'
import ReactCardFlip from 'react-card-flip';

import "./WhatDoIHave.css"

export default function WhatDoIHave() {

    
    const [isFlipped,setFlipped]=useState(false)
     const [isCardFlipped,setCardFlipped]=useState(false)

    function open(e){
        // (e.target.style.display === "block")? setfridge("none") && setFridgeItems("block"):setfridge("block")
        e.preventDefault();
       setFlipped(!isFlipped)
        console.log("I am here")
        
    }
function close(e){
        // (e.target.style.display === "block")? setfridge("none") && setFridgeItems("block"):setfridge("block")
        e.preventDefault();
setCardFlipped(!isCardFlipped)
        console.log("I am here now")
        
    }
    
    return (
        
       <div>
           <h1 className="center">What do I have?</h1>
        <div className="container">
            
        <div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" cardZIndex={-1}>
        <div key="front" >
         
          <h2 >What's in the fridge ?</h2>
           <img src= "https://images-na.ssl-images-amazon.com/images/I/71nqCR56Z3L._AC_SL1500_.jpg"  alt ="pantry" width="350px" height="400px" />
           <div className="center">
           <button className="seemore_button" onClick={open}>Check out</button>
           </div>
        </div>
 
        <div key="back">
          
           
          <h2>List of items in fridge</h2>
                 <ol>
                    <li>Milk</li>
                  <li>Tomatoes</li>
                    <li>Cheese</li>
                    <li>Yogurt</li>
                     <li>Beer</li>
                       <li>Coco-cola</li>
                       <li>Cake</li>
                        <li>Paprika</li>
                          <li>Carrot</li>
                          <li>Ice-Cream</li>
                </ol>
                 <button className="seemore_button">See more</button>
                 <div className="spacing">
                 <button className="seemore_button" onClick={open}>Check out</button>
                 </div>
                
          
        </div>
        
        </ReactCardFlip>
        </div>
        <div>
          <ReactCardFlip isFlipped={isCardFlipped} flipDirection="horizontal" cardZIndex={6}>
        <div >
         
          <h2 >What's  in the pantry ?</h2>
           <img src= "https://i.pinimg.com/564x/4c/38/cd/4c38cd0ad215dfb5ea5365630893c99d.jpg" alt ="pantry"/>
           <div className="center_all" >
           <button  className="seemore_button" onClick={close}>Check out</button>
           </div>
          
        </div>
 
        <div >
          
          
          <h2>List of items in pantry</h2>
                 <ol>
                    <li>Milk</li>
                  <li>Tomatoes</li>
                    <li>Cheese</li>
                    <li>Yogurt</li>
                    <li>Beer</li>
                    <li>Coco-cola</li>
                    <li>Cake</li>
                    <li>Paprika</li>
                    <li>Carrot</li>
                    <li>Ice-Cream</li>
                </ol>
                 <button className="seemore_button">See more</button>
                 <div className="spacing">
                 <button className="seemore_button" onClick={close}>Check out</button>
                 </div>
          
        </div>
        
      </ReactCardFlip>
      </div>
      </div>
      </div>
    )
}
