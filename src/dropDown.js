import { useState } from "react";

export default function DropDown(){
    const [states, setStates] = useState(["Yes","Probably not"]);
    const[isClicked, setIsClicked] = useState(false)

    const handleClick =()=>{
        setIsClicked(!isClicked)
        // setIsClicked(!isClicked)
    }

    const handleMouseEnter =()=>{
        setIsClicked(false)
    }

    return(
        <div className="dropdown">
            <div className="dropdown-select" onMouseEnter={handleMouseEnter}>
                <span className="select">Select</span>
                <img src="https://cdn-icons-png.flaticon.com/128/2985/2985150.png" height="20px"/>
            </div>
            <div className="dropdown-list">
            {isClicked?null:states.map((state, index)=>(
                <div className="dropdown-list-item" key={index} onClick={()=>handleClick()}>
                    {state}
                </div>
            ))}
             </div>
        </div>
    )
}

