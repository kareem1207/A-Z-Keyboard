/* eslint-disable react/prop-types */
//* Css
import styles from "@/CSS/ButtonCaps.module.css";
export const ButtonCaps = ({ displayText , display})=>{
    let letter=[]; 
    for(let i = 65 ; i <= 90 ; i++)
        letter.push(String.fromCharCode(i));
    console.log(letter);

    const handleDisplay = (text)=>{ 
        const newDisplay = display + text;
        console.log(display);
        displayText(newDisplay);
    }

    return <>
    {
        letter.map((letter)=>(
            <button className={styles["button"]} key={letter} onClick={()=>handleDisplay(letter)}>{letter}</button>
        ))
    }
    <br/>
        <button className={styles["spacebar"]} key={letter} onClick={()=>handleDisplay(" ")}>{" "}</button>
    </>
} 