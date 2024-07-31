import { useEffect, useState } from "react";

export const UseState = () => {

  //! What is useState?
  //* useState Hook is a function to add State is functional Component And State is nothing but just values and variables of you component.
  
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Shayan"); 
  const [flag, setFlag] = useState(false);
  const [names, setNames] = useState([]);


  function changeName(){
    // return setName("Shayan Dark")
    return setFlag(!flag)
  }

  let increment = () => {
    setCount((prevcount)=>prevcount + 1);
    setCount((prevcount)=>prevcount + 1);
  };
  let decrement = () => {
    if (count <= 0) {
      alert("Sorry Zero limit reached")
    } else {
      setCount(count - 1);
    }
  };

  function addNames(e) {
    e.preventDefault();
setNames([...names, {id:names.length, name}]);
setName("");
  }

  useEffect(()=>{
    document.title = count
  },[count])
  return (
    <>
    <div className="flex justify-center items-center mt-[30px] gap-10 bg-red-300 w-fit m-auto p-6 rounded-md">
      <button
        onClick={decrement}
        className="font-extrabold bg-lime-300 rounded-full px-3 py-1"
      >
        -
      </button>
      <h1 className=" font-bold text-[28px]">{count}</h1>
      <button
        onClick={increment}
        className="font-extrabold bg-lime-300 rounded-full px-3 py-1"
      >
        +
      </button>

      <h1>Hi {flag ? name : ""}</h1>
      <button className="font-extrabold bg-lime-300 rounded-full px-3 py-1" onClick={changeName}>Click Me</button>
    </div>
<form className="flex-col justify-center items-center mt-[30px] gap-10 bg-red-300 w-fit m-auto p-6 rounded-md" onSubmit={addNames}>
  <div>
  <input type="text" value={name} placeholder="input a name" onChange={(e)=>setName(e.target.value)} />
  <button className="font-extrabold bg-lime-300 rounded-full px-3 py-1">Click Me</button>
  </div>
</form>
<ul className="flex-col justify-center items-center mt-[10px] gap-10 bg-red-300 w-fit m-auto p-6 rounded-md">
  {
    names.map((item)=><li key={item.id}>{item.name}</li>)
  }
</ul>
    </>
    
  );
};
