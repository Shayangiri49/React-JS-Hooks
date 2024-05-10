import { useState } from "react"


export const MultipleForm = () => {
    const [fullName, setFullName] = useState({
        fname: "",
        lname: "",
        pnumber: "",
        email: "",
    })

    const eventHandle = (event) => {
        const { value, name } = event.target


        setFullName((preValue) => {

            return {
                ...preValue,
                [name]: value,
            }

            // if(name === "fname"){
            //     return{
            //         fname: value,
            //         lname: preValue.lname
            //     }
            // }else if(name === "lname"){
            //     return{
            //         fname: preValue.fname,
            //         lname: value,
            //     }
            // }
        })
    }

    const onSubmits = (e) => {
        e.preventDefault();
    }
    return (
        <div className="w-[100vw] h-[100vh] bg-[#8e44ad] flex flex-col gap-6 justify-center items-center">
            <form className="w-[100vw] h-[100vh] bg-[#8e44ad] flex flex-col gap-6 justify-center items-center" onSubmit={onSubmits}>
                <h1 className="text-white bg-transparent text-[30px]">{fullName.fname} {fullName.lname} {fullName.pnumber} {fullName.email}</h1>
                <input onChange={eventHandle} className="p-[15px] w-[50%] text-center bg-[#9b59b6] text-white border-solid border-[2px] border-[#ecf0f1] outline-none rounded-md" type="text" placeholder="Enter Your First Name" name="fname" value={fullName.fname} />
                <input onChange={eventHandle} className="p-[15px] w-[50%] text-center bg-[#9b59b6] text-white border-solid border-[2px] border-[#ecf0f1] outline-none rounded-md" type="text" placeholder="Enter Your Last Name" name="lname" value={fullName.lname} />
                <input onChange={eventHandle} className="p-[15px] w-[50%] text-center bg-[#9b59b6] text-white border-solid border-[2px] border-[#ecf0f1] outline-none rounded-md" type="text" placeholder="Enter Your Phone Number" name="pnumber" value={fullName.pnumber} />
                <input onChange={eventHandle} className="p-[15px] w-[50%] text-center bg-[#9b59b6] text-white border-solid border-[2px] border-[#ecf0f1] outline-none rounded-md" type="text" placeholder="Enter Your Email Address" name="email" value={fullName.email} />
                <button type="submit" className="p-[15px] bg-[#9b59b6] text-white border-solid border-[2px] border-[#ecf0f1] outline-none rounded-lg uppercase cursor-pointer">Click Me</button>
            </form>

        </div>
    )
}