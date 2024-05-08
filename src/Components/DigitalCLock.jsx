import { useState } from "react"

export const DigitalCLock = () => {
    let currTime = new Date().toLocaleTimeString();
    const [clock, setClock] = useState(currTime);
        setInterval(() => {
            let currTime = new Date().toLocaleTimeString();
            setClock(currTime)
        },1000)
  return (
    <div className="flex justify-center items-center mt-[300px] gap-10 bg-red-300 w-fit m-auto p-6 rounded-md">
        <h1 className="font-bold text-[50px] text-white flex gap-3">{clock}
        <p className="text-white">{(clock < 12) ? "AM" : "PM"}</p>
        </h1>
    </div>
  )
}
