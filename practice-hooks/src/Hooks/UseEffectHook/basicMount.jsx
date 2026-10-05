import { useEffect } from "react"

// Mounting Phase
const Greet = () => {

    useEffect(()=> {
        alert("Welcome")
    },[])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default Greet