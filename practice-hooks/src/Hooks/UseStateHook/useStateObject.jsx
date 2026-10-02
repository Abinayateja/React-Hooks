import { useState } from "react";

const UseStateObject = () => {

    let [car,setCar] = useState({
        name: "Range Rover",
        color: "Silver",
    })

    const changeCarColor = () => {
        setCar(
            (prev)=>{
                return {...prev,color:"Royal Black"}
        })
    }

    return (
        <div>
            <h1>My Favourite Car is {car.color} {car.name}</h1>
            <button onClick={changeCarColor}>Change Car Color</button>
        </div>
    )
}

export default UseStateObject;