import { useState,useMemo } from "react"

const CubeNum = ()=> {

    let [counter,setCounter] = useState(0);
    let [number,setNumber] = useState(0);

    function cubeOfNum(number) {
        console.log("Calculation Done!")
        return Math.pow(number,3)

    }
    let result = useMemo(() => cubeOfNum(number),[number])

    return (
        <div>
            <input type="number" value={number} onChange={(event)=>setNumber(event.target.value)} />
            <h1>Cube of {number} = {result}</h1>
            <h1>{counter}</h1>
            <button onClick={()=>setCounter(prev=>prev+1)}>Counter++</button>
        </div>
    )
}
export default CubeNum;