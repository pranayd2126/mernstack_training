import { createContext } from "react";
import { CounterContext } from "./CounterContext";
import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useState } from "react";

import React from 'react'
import App from "../App";

function UserContextProvider({children}) {

  const data={
    name:"suntek",
    age:22,
    email:"ravi@gmail.com"
  }
  const [userData,setData]=useState(data);
  const changeData=(newData)=>{
    setData(newData);
  }
  return (
    <UserContext.Provider value={{userData,changeData}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider



