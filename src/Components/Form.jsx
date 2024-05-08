import { useState } from "react"

export const Form = () => {
  const [name, setName] = useState()
  const [fullname, setFullname] = useState()

  const eventHandle = (event) => {
    setName(event.target.value)
  }
  const onSubmits = (event) => {
    event.preventDefault();
    setFullname(name)
  }

  return (
    <div className="w-[100vw] h-[100vh] bg-[#8e44ad] flex flex-col gap-6 justify-center items-center">
      <form className="w-[100vw] h-[100vh] bg-[#8e44ad] flex flex-col gap-6 justify-center items-center" onSubmit={onSubmits}>
      <h1 className="text-white bg-transparent text-[30px]">Hello {fullname}</h1>
      <input onChange={eventHandle} className="p-[15px] w-[50%] text-center bg-[#9b59b6] text-white border-solid border-[2px] border-[#ecf0f1] outline-none rounded-md" type="text" placeholder="Enter Your Name" value={name} />
      <button type="submit" className="p-[15px] bg-[#9b59b6] text-white border-solid border-[2px] border-[#ecf0f1] outline-none rounded-lg uppercase cursor-pointer">Click Me</button>
      </form>
     
    </div>
  )
}
