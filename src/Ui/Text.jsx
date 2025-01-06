import { ButtonCaps } from "@/components/ButtonCaps.jsx";
import { ButtonSmall } from "@/components/ButtonSmall.jsx";
import { ButtonNum } from "@/components/ButtonNum";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastsify/dist/ReactToastify.css';
import { MdContentCopy } from "react-icons/md";

export const Text = ()=>{
    const [text , setText] = useState("");

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
        <ButtonCaps displayText ={setText} display={text} />
        <ButtonSmall displayText ={setText} display={text} />
    </>
}