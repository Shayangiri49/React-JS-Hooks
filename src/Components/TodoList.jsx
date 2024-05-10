/* eslint-disable react/prop-types */


export const TodoList = (props) => {
  return (
    <>
    <div className="flex flex-row justify-left ml-8 items-center gap-2.5">
        <i onClick={()=>{
            props.onSelect(props.id)
        }} className="fa fa-times 
         cursor-pointer hover:bg-red-500 rounded-full p-1.5" aria-hidden="true" />
        <li className="pl-0 text-center text-[20px] font-bold  min-h-[40px] flex items-center text-[#8566aa] capitalize"> {props.text} </li>
    </div>
</>

  )
}
