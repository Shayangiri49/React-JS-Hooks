import { useState } from "react"
import { MdDeleteForever } from "react-icons/md"

export const TodoApp = () => {
    const [todo, setTodo] = useState("")
    const [todolist, setTodolist] = useState([])
    const addTodo = (e)=>{
        e.preventDefault();
        if(!todo) return;
        if(todolist.includes(todo)) return;
        setTodolist((prevTask)=>[...prevTask,todo])
        setTodo("")
    }
    const handleDeleteTodo = (value) => {
        const updateTask = todolist.filter((curElem)=>curElem !== value)
        setTodolist(updateTask)
    }
    return (
        <section>
            <header>
                <h1>TODO LIST</h1>
            </header>
            <form onSubmit={addTodo} className="flex gap-3">
                <input type="text" placeholder="Enter Your Items" value={todo} onChange={(e) => setTodo(e.target.value)} />
                <button>Add Item</button>
            </form>
            <ul>
                {
                    todolist.map((item,index)=><li className="flex gap-7 items-center" key={index}><span>{item}</span>
                    <button onClick={()=>handleDeleteTodo(item)}><MdDeleteForever/></button></li>)
                }
            </ul>
        </section>
    )
}
