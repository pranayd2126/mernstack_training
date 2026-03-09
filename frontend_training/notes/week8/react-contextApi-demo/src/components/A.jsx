
// export defaul
import React, { useRef, useContext, useEffect } from "react";
import { CounterContext } from "../context/CounterContext";
import { UserContext } from "../context/UserContext";

function A() {
  let inputRef =useRef();
  
  const { counter1, changeCounter1 } = useContext(CounterContext);
  const { userData, changeData } = useContext(UserContext);

  console.log("component A rendered");
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="bg-red-500 p-4">
      <h1 className="text-white text-2xl text-center">Component A</h1>

      <p className="text-white text-center mt-4">Counter: {counter1}</p>

      <button
        className="bg-white text-blue-500 p-2 mt-4 block mx-auto rounded"
        onClick={changeCounter1}
      >
        Increment Counter
      </button>

      <p>name: {userData?.name}</p>
      <p>age: {userData?.age}</p>

      <button
        className="bg-white text-blue-500 p-2 mt-4 block mx-auto rounded"
        onClick={() => changeData("pranay")}
      >
        Change Name
      </button>
      <input type="text" ref={inputRef} />
    </div>
  );
}

export default A;