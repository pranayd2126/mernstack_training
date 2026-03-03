// import React, { useState } from 'react'
// import { useContext } from 'react'
// import { CounterContext } from '../context/CounterContext'
// import { UserContext } from '../context/UserContext';

// function A() {
//     let {counter1, changeCounter1}= useContext(CounterContext);
//     let { userData, chnageData } = useContext(UserContext);
//     const [name,setname]=useState(userData)
//     console.log( "componet a rendered");
//     const newname="pranay"
//   return (
//     <div className="bg-red-500 p-4">
//       <h1 className="text-white text-2xl text-center">Component A</h1>
//       <p className="text-white text-center mt-4">Counter: {counter1}</p>
//       {/* {changeCounter1 && <button className="bg-white text-red-500 p-2 mt-4 block mx-auto rounded" onClick={changeCounter1}>Increment Counter</button>} */}
//       <button
//         className="bg-white text-blue-500 p-2 mt-4 block mx-auto rounded"
//         onClick={changeCounter1}
//       >
//         Increment Counter
//       </button>

//       <p>nama:{userData.name}</p>
//       <p>age:{userData.age}</p>
//       <button
//         className="bg-white text-blue-500 p-2 mt-4 block mx-auto rounded"
//         onClick={() => {
//           chnageData(newname);
//         }}
//       >
//         chnage name
//       </button>
//       <p>nama:{userData.name}</p>
//     </div>
//   );
// }

// export default A

import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { UserContext } from "../context/UserContext";

function A() {
  const { counter1, changeCounter1 } = useContext(CounterContext);
  const { userData, changeData } = useContext(UserContext);

  console.log("component A rendered");

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
    </div>
  );
}

export default A;