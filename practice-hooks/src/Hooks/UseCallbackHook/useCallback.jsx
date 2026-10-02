import { useCallback, useState } from "react";
import Header from "../../components/Header";


const FunctionAsProps = () => {

    let [counter,setCounter] = useState(0)

    let newFun = useCallback(() => {

    },[])

    return (
        <div>
            <Header newFun = {newFun}/>
            <h1>{counter}</h1>
            <button onClick={()=> setCounter(prev => prev + 1)}>Counter++</button>
        </div>
    )
}

export default FunctionAsProps;