import {create} from 'zustand'



 export const useTest=create((set)=>({
    //state
    x:10,
    y:20,
    user:{
        name:"John",
        age:30
    },
    
    //funtion to modify state
    incrementX:()=>set((state)=>({x:state.x+1})),
    decremenetX:()=>set(state=>({x:state.x-1})),
    incrementY:()=>set((state)=>({y:state.y+1})),
    incremnetXbyValue:(v)=>set(state=>{x:state.x+v}),
    updateUser:()=>set(state=>({user:{...state.user, name:"Doe"}}))



}))
