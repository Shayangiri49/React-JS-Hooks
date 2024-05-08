import { useState } from "react";

export const UseState = () => {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };
  let decrement = () => {
    if (count <= 0) {
      return;
    } else {
      setCount(count - 1);
    }
  };
  return (
    <div className="flex justify-center items-center mt-[300px] gap-10 bg-red-300 w-fit m-auto p-6 rounded-md">
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
    </div>
  );
};
