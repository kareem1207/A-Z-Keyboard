import { useState } from "react";

/* eslint-disable react/prop-types */
export const ButtonCaps = ({displayText})=>{
    const [display , setDisplay]=useState("");
    
    const handleDisplay = (text)=>{ 
        const newDisplay = display + text;
        setDisplay(newDisplay);
        console.log(display);
        displayText(newDisplay);
    }

    return <>
        <button onClick ={()=>handleDisplay("A")}>A</button>
        <button onClick ={()=>handleDisplay("B")}>B</button>

    </>
}