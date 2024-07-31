import { useState } from "react"

export const ToggleSwitch = () => {
    const [click, setClick] = useState(false)
    let curTime = new Date().toLocaleTimeString()
    const [clock,setClock] = useState(curTime)
    setInterval(()=>{
        let curTime = new Date().toLocaleTimeString()
setClock(curTime)
    },1000)
    const toggleClick = () => {
        setClick(!click)
    }
  return (
    <>
     <div className="bg-slate-400 w-24 rounded-xl p-3 mt-12 m-auto cursor-pointer" onClick={toggleClick}>
        <div className="text-center bg-zinc-300 p-1 rounded-2xl">
            <span className="">{click?"ON":"OFF"}</span>
        </div>
    </div>
    <div className="bg-slate-400 w-24 rounded-xl p-3 mt-12 m-auto cursor-pointer">
        <div className="text-center bg-zinc-300 p-1 rounded-2xl">
            <span className="">{clock}</span>
        </div>
    </div>
    </>
   
  )
}
