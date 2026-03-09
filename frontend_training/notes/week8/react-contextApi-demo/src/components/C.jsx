import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import { useTest } from '../Store/TestStore'
function C() {
  let {counter1,changeCounter1}= useContext(CounterContext);

  // const x=useTest(state=>state.x)
  // const incrementX=useTest(state=>state.incrementX)
const y=useTest(state=>state.y)
const incrementY=useTest(state=>state.incrementY)
const  updateUser=useTest(state=>state.updateUser)
  // console.log(x);
     console.log("componet c rendered");
  return (
    <div className="bg-green-500 p-4">
      <h1 className="text-white text-2xl text-center">Component C</h1>
      <p className='text-white text-center'> x is {y}</p>
      <button className="bg-white text-blue-500 p-2 mt-4 block mx-auto rounded" onClick={incrementY}>Increment Y</button>
      <button className="bg-white text-blue-500 p-2 mt-4 block mx-auto rounded" onClick={useTest.getState().decremenetX}>Decrement X</button>

      <p className="text-white text-center mt-4">Counter: {counter1}</p>
      <button className="bg-white text-blue-500 p-2 mt-4 block mx-auto rounded" onClick={changeCounter1}>Increment Counter</button>
      <button className="bg-white text-blue-500 p-2 mt-4 block mx-auto rounded" onClick={updateUser}>Update User</button>
      <p className="text-white text-center mt-4">User: {useTest.getState().user.name}, Age: {useTest.getState().user.age}</p>
    </div>  
  )
}

export default C
