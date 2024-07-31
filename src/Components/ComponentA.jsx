import React, { useState } from 'react'
import { ComponentB } from './ComponentB'
import { createContext } from 'react'

export const UserContext = createContext();

export const ComponentA = () => {
    const [user, setUser] = useState("Shayan")
  return (
    <div className='box'>
       <h1>ComponentA</h1> 
       <h2>{`Hello ${user}`}</h2>
       <UserContext.Provider value={user}>
       <ComponentB/>
       </UserContext.Provider>
       
        </div>
  )
}
