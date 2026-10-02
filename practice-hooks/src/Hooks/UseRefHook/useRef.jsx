import { useEffect, useState,useRef } from "react"

const RenderCount = () => {
    let [value,setValue] = useState(0);
    let count = useRef(0);

    useEffect(
        ()=> {
            count.current += 1;
        }
    )


    return (
        <div>
            <button onClick={() => setValue(prev=>prev+1)}>+1</button>
            <h1>{value}</h1>
            <h1>Renders : {count.current}</h1>
            <button onClick={() => setValue(prev=>prev-1)}>-1</button>
        </div>
    )
}

export default RenderCount;