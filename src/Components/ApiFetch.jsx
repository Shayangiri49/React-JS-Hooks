import { useEffect, useState } from "react"

export const ApiFetch = () => {
    const [apidata, setApidata] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then((res)=>res.json()).then((data)=>setApidata(data)).catch((error)=>console.log(error))
    },[])
    
  return (
    <div>
        <ul>
            {
                apidata.map((datajson)=>{
                  return  <li key={datajson.id}>{datajson.name}</li>
                })
            }
        </ul>
    </div>
  )
}
