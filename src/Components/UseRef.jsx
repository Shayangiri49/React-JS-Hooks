import { useEffect, useRef, useState } from 'react'

//! What is useRef() hook?
//* useRef is a react hook that allow us to create mutable variables,which will not re-render the component.

export const UseRef = () => {
  const [name, setName] = useState(0)
  // const [count, setCount] = useState(0)

  const count = useRef(0)
  const input = useRef(0)

  function handleChange(){
    input.current.style.width = "300px"
    input.current.focus();
  }

  useEffect(()=>{
    count.current = count.current + 1;
  })
  return (
    <div>
      <div className='flex gap-2'>
      <input className='border border-gray-300 dark:bg-gray-700 text-white rounded-lg px-3 py-1' ref={input} type="text" placeholder='type a line' onChange={(e)=>setName(e.target.value)} />
      <button onClick={handleChange} className='border-gray-300 dark:bg-violet-500 px-2 py-1 rounded-xl cursor-pointer text-white'>Change Width</button>
      </div>
     
      <h2>Name: {name}</h2>
      <h1>Render Count: {count.current}</h1>
    </div>
  )
}
