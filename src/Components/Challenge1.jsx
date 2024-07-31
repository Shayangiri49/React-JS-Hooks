import { useState } from "react"

export const Challenge1 = () => {
    const [count, setCount] = useState(0)
    const [step, setStep] = useState(0)

    const handleIncrement = () => {
        setCount(count + step)
    }
    const handleDecrement = () => {
        setCount(count - step)
    }
    const handleReset = () => {
        setCount(0)
    }

    return (
        <div className="w-[500px] m-auto mt-8">
            <h1 className="text-red-400 bg-transparent text-[30px]">useState Challenge</h1>
            <p className="text-red-400 bg-transparent text-[20px]">count: <span>{count}</span></p>
            <div>
                <label className="text-red-400 bg-transparent text-[20px]">
                    Step:
                    <input className="bg-lime-200 ml-2 rounded-2xl" type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))} />
                </label>
                <div className="flex gap-5 mt-4">
                    <button className="p-[15px] bg-[#9b59b6] text-white border-solid border-[2px] border-[#ecf0f1] outline-none rounded-lg uppercase cursor-pointer" onClick={handleIncrement}>Increment</button>
                    <button className="p-[15px] bg-[#9b59b6] text-white border-solid border-[2px] border-[#ecf0f1] outline-none rounded-lg uppercase cursor-pointer" onClick={handleDecrement} disabled={count<=0}>Decrement</button>
                    <button className="p-[15px] bg-[#9b59b6] text-white border-solid border-[2px] border-[#ecf0f1] outline-none rounded-lg uppercase cursor-pointer" onClick={handleReset}>Restet</button>
                </div>
            </div>
        </div>
    )
}
