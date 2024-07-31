//! What is useMemo() hook?
//* The react useMemo Hook returns a memoized value.(It's like caching a value so that it doesn't need to be recalculated.)
//* The useMemo Hook only runs when one of it's dependencies gets update.
//* The useMemo and useCallback Hooks are similar. The main difference is ---> useMemo returns a memoized value but useCallback returns a memoized function.

import { useMemo } from "react";
import {useState} from "react"

export const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  function cubeNum(num){
    console.log("Calculation Done!");
    return Math.pow(num,3)
  }
  const result = useMemo(()=>cubeNum(number),[number]) 

  return (
    <div>
      <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)} />
      <h1>Cube of the number is: {result}</h1>
      <button onClick={()=>setCount(count+1)}>Count++</button>
      <h1>Count Value: {count}</h1>
    </div>
  )
}
