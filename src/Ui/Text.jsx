import { ButtonCaps } from "@/components/ButtonCaps.jsx";
import { ButtonSmall } from "@/components/ButtonSmall.jsx";
import { ButtonNum } from "@/components/ButtonNum";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdContentCopy } from "react-icons/md";
import { BsCapslock } from "react-icons/bs";
import { BsCapslockFill } from "react-icons/bs";

export const Text = ()=>{
    const [text , setText] = useState("");
    const [caps , setCaps] = useState(false);

    const copyToClickBoard = async () => {
        try {
            await navigator.clipboard.writeText(text);
            toast.success('Successfully copied! 🎉', {
                position: "bottom-right",
                autoClose: 2000,
                icon: "🚀",
                style: {
                    background: '#4CAF50',
                    color: 'white',
                    borderRadius: '10px',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                }
            });
        } catch (err) {
            toast.error('Failed to copy! 😢\nFollowing Error occurred : '+err);
        }
    }

    return <>
        <h1>Text</h1>
        <p>{text}</p>
        <button onClick={copyToClickBoard}><MdContentCopy /></button>
        <ToastContainer />
        <ButtonNum displayText ={setText} display={text} />
        <button onClick={()=>setCaps(!caps)}>{caps ? <BsCapslockFill /> : <BsCapslock />}</button>
        {
            caps ? <ButtonCaps displayText ={setText} display={text} /> : <ButtonSmall displayText ={setText} display={text} />
        }

    </>
}