import { useState } from "react"


const UseState =() => {
    let [color,setColor] = useState("Green")
    const changeColor = () => setColor("Black")

    return (
        <div>
            <h1>My favourite Color is {color}</h1>
            <button onClick={changeColor}>Change Color</button>
        </div>
    )
}

export default UseState;
