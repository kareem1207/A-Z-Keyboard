import { ButtonCaps } from "@/components/ButtonCaps.jsx";
import { ButtonSmall } from "@/components/ButtonSmall.jsx";
import { useState } from "react";

export const Text = ()=>{
    const [text , setText] = useState("");
    
    return <>
        <h1>Text</h1>
        <p>{text}</p>
        <ButtonCaps displayText ={setText} />
        <ButtonSmall displayText ={setText}  />
    </>
}