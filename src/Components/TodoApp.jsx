import { useState } from "react";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
    const [todo, setTodo] = useState();
    const [items, setItems] = useState([]);

    const eventHandle = (event) => {
        setTodo(event.target.value);
    }

    const onSubmits = () => {
        setItems((oldItems) => {
            return [...oldItems, todo]
        })
        setTodo("");
    }
    const deleteItems = (id) => {
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index != id;
            })
        })
    }
    return (
        <>
            <div className="bg-[#6983aa] flex flex-row justify-center items-center text-center w-[100vw] h-[100vh]">
                <div className="w-[25%] h-[80vh] bg-[#f4f4f4] rounded-[15px] shadow-2xl">
                    <br />
                    <h1 className="text-white bg-[#8566aa] px-[6px] py-[4px] mb-[10px] shadow-lg font-bold text-[18px] tracking-wider">ToDo List</h1>
                    <br />
                    <input onChange={eventHandle} value={todo} className="text-center h-[30px] top-[10px] bg-transparent text-[20px] font-bold w-[60%] outline-none border-b-2 border-[#8566aa]" type="text" placeholder="Add a Item" />
                    <button onClick={onSubmits} className="min-h-0 w-[60px] pb-1 rounded-[50%] bg-[#8566aa] text-white text-[40px] ml-[10px] hover:bg-[#20bf6b]">+</button>


                    <ol className="mt-[30px]">
                        {/* <li className="pl-0 text-center text-[20px] font-bold  min-h-[40px] flex items-center text-[#8566aa] capitalize">{todo} </li> */}
                        {items.map((itemValue,index) => {
                            return(
                                
                                <TodoList key={index} id={index} text={itemValue} onSelect={deleteItems} />
                            )
                            
                           

                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}
