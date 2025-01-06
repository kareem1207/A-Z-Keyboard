//* All Modules
import { ButtonCaps } from "@/components/ButtonCaps.jsx";
import { ButtonSmall } from "@/components/ButtonSmall.jsx";
import { ButtonNum } from "@/components/ButtonNum";
//* Toast
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//* Icons
import { MdContentCopy } from "react-icons/md";
import { BsCapslock } from "react-icons/bs";
import { BsCapslockFill } from "react-icons/bs";
import { FaDeleteLeft } from "react-icons/fa6";
import { MdDeleteForever } from "react-icons/md";
//* React
import { useState } from "react";
//* Css
import  "@/CSS/Text.css";

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
        finally{
            setText("");
        }
    }

    const handleDelete = () => {
        const len = text.length;
        setText(text.replace(text[len-1], ""));
    }

    const handleClear = () => {
        setText("");
    }

    return <>
        <h1>Text</h1>
        <p >{text}</p>
        <button className="icon" onClick={copyToClickBoard}><MdContentCopy /></button>
        <ToastContainer />
        <ButtonNum displayText ={setText} display={text} />
        <br/>
        <button onClick={()=>setCaps(!caps)}>{caps ? <BsCapslockFill /> : <BsCapslock />}</button>
        <button onClick={handleDelete}><FaDeleteLeft/></button>
        <button onClick={handleClear}><MdDeleteForever /></button>
        <br/>
        {
            caps ? <ButtonCaps displayText ={setText} display={text} /> : <ButtonSmall displayText ={setText} display={text} />
        }

    </>
}