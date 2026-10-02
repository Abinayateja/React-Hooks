import {useRef} from 'react'

const AccessDOMElement = () => {

    let inputElement = useRef()

    function changeElement () {
        console.log(inputElement.current);
        inputElement.current.style.backgroundColor = "Pink";
        
    }
    
    return (
        <div>
            <input type="text" ref={inputElement}/>
            <button onClick={changeElement}>Click Here</button>
        </div>
    )
}

export default AccessDOMElement;