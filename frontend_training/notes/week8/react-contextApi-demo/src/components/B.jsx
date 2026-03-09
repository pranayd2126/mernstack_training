import React, { use } from 'react'
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";
import { useTest } from '../Store/TestStore';

function B() {
    let {counter1, changeCounter1}= useContext(CounterContext);
    const x= useTest(state=>state.x)
    const incrementX=useTest(state=>state.incrementX)
    const incrementXbyValue=useTest(state=>state.incremnetXbyValue)
       console.log("componet b rendered");
  return (
    <div className="bg-blue-500 p-4">
      <h1 className="text-white text-2xl text-center">Component B</h1>
      <p className="text-white text-center mt-4">Counter: {counter1}</p>
      <button className="bg-white text-blue-500 p-2 mt-4 block mx-auto rounded" onClick={changeCounter1}>Increment Counter</button>
      <p className="text-white text-center mt-4">X: {x}</p>
      <button className="bg-white text-blue-500 p-2 mt-4 block mx-auto rounded" onClick={incrementX}>Increment X</button>
      <button className="bg-white text-blue-500 p-2 mt-4 block mx-auto rounded" onClick={() => incrementXbyValue(5)}>Increment X by 5</button>
    </div>
  )
}

export default B
