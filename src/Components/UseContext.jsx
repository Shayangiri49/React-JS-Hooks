//! what is useContext hook?
//* useContext Hook is used to manage global data in react application.This is 3 step process ---> 1. Create the context 2. Providing the context 3. Consuming the context.

import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"))
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

function UseContext() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <div className="flex flex-col gap-6">
      <div className={theme === "light" ? "rounded w-[800px] m-auto mt-5 bg-gray-50 p-8 text-neutral-900 border border-gray-100" : "rounded w-[800px] m-auto mt-5 bg-gray-900 p-8 text-neutral-300 border border-gray-800"}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Suscipit dolores illo, reprehenderit voluptate recusandae
        perspiciatis quam, pariatur commodi possimus officiis quas vitae
        voluptatum. Magni aliquam eligendi itaque possimus sit dolorem.
      </div>
      <div className='w-auto m-auto'>
        <button
          onClick={toggleTheme}
          className="rounded p-3 m-auto bg-blue-600 text-white"
        >
          Change Theme
        </button>
      </div>
    </div>
  )
}

export default function theme() {
  return (
    <ThemeProvider> <UseContext /> </ThemeProvider>
  )
}
