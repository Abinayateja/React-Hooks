import { useState } from "react"

const UseStateMultiple = () => {
    let [count,setCount] = useState(0);

    function increaseCountBy1 () {
        setCount(count + 1);
    }

    // function increaseCountBy4 () { 
    //     setCount(count + 1); // 1
    //     setCount(count + 1); // 1
    //     setCount(count + 1); // 1
    //     setCount(count + 1); // 1 
    // } // So finally it increments only by 1

    function increaseCountBy4 () {
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
        setCount(prev => prev + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increaseCountBy1}>Increase by 1</button>
            <button onClick={increaseCountBy4}>Increase by 4</button>
        </div>
    )
}

export default UseStateMultiple;