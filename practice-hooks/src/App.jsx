import { useState } from 'react'
import UseState from './Hooks/UseStateHook/useState'
import UseStateObject from './Hooks/UseStateHook/useStateObject'
import UseStateMultiple from './Hooks/UseStateHook/useStateMultiple'
import Timer from './Hooks/UseEffectHook/useEffect'
import RenderCount from './Hooks/UseRefHook/useRef'
import AccessDOMElement from './Hooks/UseRefHook/useRefDOM'
import CubeNum from './Hooks/UseMemoHook/useMemo'
import FunctionAsProps from './Hooks/UseCallbackHook/useCallback'
import Greet from './Hooks/UseEffectHook/basicMount'
import UnMount from './Hooks/UseEffectHook/un-mount'
import Update from './Hooks/UseEffectHook/basicUpdate'
import './App.css'


function App() {

  return (
    <>
      {/* <UseState/> */}
      {/* <UseStateObject/> */}
      {/* <UseStateMultiple/> */}
      {/* <Timer/> */}
      {/* <RenderCount/> */}
      {/* <AccessDOMElement/> */}
      {/* <CubeNum/> */}
      {/* <FunctionAsProps/> */}
      {/* <Greet/> */}
      {/* <UnMount/> */}
      <Update/>

      
    </>
  )
}

export default App
