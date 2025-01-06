import { ButtonCaps } from "@/components/ButtonCaps.jsx";
import { useState } from "react";
export const Text = ()=>{
    const [text , setText] = useState("hi ");
    return <>
        <h1>Text</h1>
        <p>{text}</p>
        <ButtonCaps displayText ={setText} />
    </>
}