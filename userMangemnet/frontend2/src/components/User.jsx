

import React from "react";
import { useLocation } from "react-router-dom";

function User() {
  const { state } = useLocation();

  return (
    <div className="flex flex-col mt-14 sm:flex-row justify-between">
      <div className="w-3/5 p-10">
        <h1 className="text-2xl">{state?.name}</h1>
        <p>{state?.email}</p>
        <p>{state?.mobileNumber}</p>
      </div>
    </div>
  );
}

export default User;