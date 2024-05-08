import { useState } from "react"

export const HandlingEvent = () => {
    const purple = "#8e44ad"
    const [bg, setBg] = useState(purple)
    const [name, setName] = useState("Click Me")
    const bgChange = () => {
        let newBg = "#34495e"
        setBg(newBg)
        setName("Hello")
    }
    const bgBack = () => {
        let oldBg = "#8e44ad"
        setBg(oldBg)
        setName("Back To Me")
    }

  return (
    <div style={{backgroundColor : bg}} className="bg-[#8e44ad] flex justify-center items-center w-[100%] h-[100vh]">
        <button onClick={bgChange} onDoubleClick={bgBack} className="px-[20px] py-[12px] bg-[#9b59b6] text-white border-solid border-[2px] border-[#ecf0f1] uppercase cursor-pointer rounded-md">{name}</button>
    </div>
  )
}
