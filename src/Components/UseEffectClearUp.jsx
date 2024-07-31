import { useEffect, useState } from "react"

export const UseEffectClearUp = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
setCount(count+1)
        },1000)
    },[count])
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener("resize", ()=>{
            setWidth(window.innerWidth)
        })
    })
    return (
        <div>
            <h1 className="text-[4.2rem]">
                The size of the window is <span className="text-[#2e86c1]"> {width} </span>
            </h1>
            <h1 className="text-[4.2rem]">{count}</h1>
        </div>
    )
}
