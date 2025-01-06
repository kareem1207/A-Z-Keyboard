import { ButtonCaps } from "@/components/ButtonCaps.jsx";
import { ButtonSmall } from "@/components/ButtonSmall.jsx";
import { ButtonNum } from "@/components/ButtonNum";
import { useState } from "react";

export const Text = ()=>{
    const [text , setText] = useState("");

    return <>
        <h1>Text</h1>
        <p>{text}</p>
        <ButtonNum displayText ={setText} display={text} />
        <ButtonCaps displayText ={setText} display={text} />
        <ButtonSmall displayText ={setText} display={text} />
    </>
}