import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useState } from 'react';
export const MyAccordion = ({ question, answer }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <div className="flex mt-[30px] p-[20px] gap-4 bg-[#f1f4ff] rounded-t-[5px] items-center">
        <p onClick={() => setShow(!show)}>
          {show ? <RemoveCircleIcon className=' cursor-pointer' /> : <AddCircleIcon className=' cursor-pointer' />}
        </p>
        <h3 onClick={() => setShow(!show)} className='tracking-wide text-[18px] font-semibold cursor-pointer'>{question}</h3>
      </div>
      {
        show ? <p className='text-[#303243] p-[7px] pl-[55px] text-[15px] tracking-wide  bg-[#f1f4ff] border-solid border-[2px] border-[#ecf0f1] rounded-b-[5px]'>{answer}</p> : ""
      }

    </>
  )
}
