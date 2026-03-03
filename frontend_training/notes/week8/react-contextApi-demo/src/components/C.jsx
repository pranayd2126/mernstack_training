import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
function C() {
  let {counter1,changeCounter1}= useContext(CounterContext);
     console.log("componet c rendered");
  return (
    <div className="bg-green-500 p-4">
      <h1 className="text-white text-2xl text-center">Component C</h1>
      <p className="text-white text-center mt-4">Counter: {counter1}</p>
      <button className="bg-white text-blue-500 p-2 mt-4 block mx-auto rounded" onClick={changeCounter1}>Increment Counter</button>
    </div>  
  )
}

export default C
