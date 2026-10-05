import { useEffect } from "react"

const UnMount = () => {

    useEffect(() => {
        return ()=> alert("Hi")
    },[])
    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}

export default UnMount;