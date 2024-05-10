// import { useState } from "react"
import { questions } from "./api"
import { MyAccordion } from "./MyAccordion"

export const Accordion = () => {
    // const [data, setData] = useState(questions)
    return (
        <>
            <section className="w-[50vw] p-[50px] bg-slate-300 border-solid border-[2px] border-[#ecf0f1] rounded-md">
                <h1 className="text-center font-mono capitalize text-[32px] tracking-wider mb-[50px] text-[#2c3148]">React Interview Questions</h1>
                {
                    questions.map((currElem) => {
                        return <MyAccordion {...currElem} />
                    })
                }
            </section>


        </>
    )
}
