/* eslint-disable react/prop-types */
export const ButtonCaps = ({displayText})=>{
    
    const handleDisplay = ()=>{ 
        displayText("A");
    }

    const handleDisplayB = ()=>{ 
        displayText("B");
    }

    return <>
        <button onClick ={handleDisplay}>A</button>
        <button onClick ={handleDisplayB}>B</button>
    </>
}