//! What is useCallback() hook?
//* useCallback is a React Hook that lets you cache a function definition between re-renders.It means, when we use the useCallback Hook, it doesn't create multiple instance of same function when re-render happens.

import { useCallback, useState } from "react"
import  UseCallback2  from "./UseCallback2"

export const UseCallback = () => {
    const [count, setCount] = useState(0)
    const newFunc = useCallback(()=>{},[])
    // const newFunc = useCallback(()=>{},[count])
  return (
    <div>
        <UseCallback2 newFunc = {newFunc}/>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}
