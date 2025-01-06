/* eslint-disable react/prop-types */
export const ButtonNum = ({ displayText , display})=>{
    let digits=[]; 
    for(let i = 0 ; i <= 9 ; i++)
        digits.push(i);
    console.log(digits);

    const handleDisplay = (digit)=>{ 
        const newDisplay = display + digit;
        console.log(display);
        displayText(newDisplay);
    }

    return <>
    {
        digits.map((digit)=>(
            <button key={digit} onClick={()=>handleDisplay(digit)}>{digit}</button>
        ))
    }
    </>
} 