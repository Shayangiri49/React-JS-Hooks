import { useState } from "react"

export const DerivedState = () => {
    const [users, setUsers] = useState([
        {name: "Alice", age: 25},
        {name: "Bob", age: 30},
        {name: "Charlie", age: 35},
        {name: "Angles", age: 45},
    ])
    //? Derived State: Count of users
    const userCount = users.length;
    //? Derived State: average age of users
    const averageAge = users.reduce((accum,curElm)=>accum+curElm.age,0) / userCount
  return (
    <div>
        <h1>Users List</h1>
        <ul>
            {
                users.map((item)=>{
                    return <>
                    <li>
                        {item.name} - {item.age} years old
                    </li>
                    </>
                })
            }
        </ul>
        <h1>Total User: {userCount}</h1>
        <h1>Avarage Age: {averageAge}</h1>
    </div>
  )
}
