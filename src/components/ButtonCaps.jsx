/* eslint-disable react/prop-types */
export const ButtonCaps = ({ displayText , display})=>{
    let letter=[]; 
    for(let i = 65 ; i <= 90 ; i++)
        letter.push(String.fromCharCode(i));
    letter.push(" ");
    console.log(letter);

    const handleDisplay = (text)=>{ 
        const newDisplay = display + text;
        console.log(display);
        displayText(newDisplay);
    }

    return <>
    {
        letter.map((letter)=>(
            <button key={letter} onClick={()=>handleDisplay(letter)}>{letter}</button>
        ))
    }
    </>
} 