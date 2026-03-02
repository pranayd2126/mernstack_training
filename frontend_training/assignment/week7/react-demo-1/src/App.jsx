 import'./App.css'
 
 function App(){
    //state
    let username="ravi"
  let person={
    pid:100,
    name:"bhani"
  }
  let marks=[90,78,56]
    //retun a react elemets 
    const test = ( ) => {
      console.log("test function called")
    }
    const test2 = (num) => {
      console.log("test function called with arg",num)
    }
  return (
    <div className="text-5xl text-center">
        <h1 className="text-3xl  text-blue-500 ">Hello from App component!</h1>
        {/* username */}
        <h2 className='text-4xl'>username:{username}</h2>
        {/* person objsect */}
        <h2>{person.pid}</h2>
        <h2>{person.name}</h2>
        {/* marks */}
        {
        marks.map((mark,index)=><h2 key={index}>{mark}</h2>)
        }    
        <button onClick={test} className='bg-amber-500 text-lime-100 p-3'>click me</button>  
        <button onClick={()=>test2(100)} className='bg-amber-500 text-lime-100 p-3'>click me with arg</button>
      </div>
    )


  }
  export default App