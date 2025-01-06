/* eslint-disable react/prop-types */
export const ButtonSmall = ({ displayText , display })=>{
    let letter=[]; 
    for(let i = 97 ; i <= 122 ; i++)
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