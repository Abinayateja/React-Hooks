import { useEffect, useState } from "react"

const Update = () => {

    let [name,setName] = useState("Abi");

    const changeName = () => {
        setName("Anusha");
    }

    useEffect(()=> {
        return alert("Hello");
    },[name]);

    return(
        <div>
            <h1>{name}</h1>
            <button onClick={changeName}>Change</button>
        </div>
    )
}

export default Update;