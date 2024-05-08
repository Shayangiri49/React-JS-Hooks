import { useState } from "react"

export const GetTime = () => {
    let currDate = new Date().toLocaleTimeString();
    const [time, setTime] = useState(currDate)
    let timeGet = () => {
        let currDate = new Date().toLocaleTimeString();
        setTime(currDate) 
    }
  return (
    <div className="flex justify-center items-center mt-[300px] gap-10 bg-red-300 w-fit m-auto p-6 rounded-md">
        <h1 className="font-bold">{time}</h1>
        <button onClick={timeGet} className="font-extrabold bg-lime-300 rounded-full px-3 py-1">Get Time</button>
    </div>
  )
}
